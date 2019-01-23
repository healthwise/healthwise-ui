import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Video.css'

import videojs from 'video.js'
import Insights from '@healthwise/insights'
import MediaCredits from '@healthwise/media-credits'

class Video extends Component {
  constructor(props) {
    super(props)
    this.renderVideo = this.renderVideo.bind(this)
    this.insights = new Insights()
  }

  componentDidMount() {
    const that = this
    const { item, setFocus, onStart, onProgress, onEnd } = this.props

    this.player = videojs(item.id)

    this.player.ready(() => {
      if (setFocus) {
        const videoElement = document.getElementById(item.id)

        if (videoElement && videoElement.querySelector('.vjs-big-play-button')) {
          videoElement.querySelector('.vjs-big-play-button').focus()
        }
      }
    })

    let startedFlag = false
    let previousProgress = 0

    this.player.on('timeupdate', function() {
      const current = this.currentTime()
      const duration = this.duration()

      // in some browsers, timeupdate is called on load (hence the check for elapsed time)
      if (!startedFlag && current > 0.5) {
        startedFlag = true

        that.onStart(item, duration)
        onStart(item, duration)
      }

      that.onProgress(previousProgress, current, duration, item)
      onProgress(previousProgress, current, duration, item)

      previousProgress = current
    })

    this.player.on('ended', function() {
      onEnd()
    })
  }

  componentWillUnmount() {
    this.player.dispose()
  }

  getBaseInsightsObject(item) {
    return {
      pageName: document.title,
      documentHwid: item.id,
      documentType: 'video',
      documentTitle: item.title.consumer,
      documentLanguage: item.lang,
    }
  }

  onStart(item, duration) {
    let obj = this.getBaseInsightsObject(item)
    obj.videoLength = duration
    obj.eventName = 'videoViewed'

    this.insights.trackEvent(obj)
  }

  onProgress(previous, current, duration, item) {
    // these are the percentages at which we report progress to Insights
    const progressPoints = [0.25, 0.5, 0.75, 1] // CAUTION: if any points are added here, we need to change our Insights reporting!!
    // content complete is video length less credits (~4s)
    const contentComplete = duration - 4
    const baseInsightsObject = this.getBaseInsightsObject(item)

    let analytics = Object.assign({}, baseInsightsObject)

    progressPoints.forEach(function(percent, i) {
      let previousPercentProgress = previous / duration
      let currentPercentProgress = current / duration

      if (previousPercentProgress < percent && currentPercentProgress >= percent) {
        let previousMarker = i ? progressPoints[i - 1] : 0

        analytics.progress = percent * 100
        analytics.timeViewed = duration * (percent - previousMarker)
      }
    })

    // Insights events: videoMilestone & videoComplete
    if (analytics.progress) {
      analytics.eventName = 'videoMilestone'

      this.insights.trackEvent(analytics)

      if (analytics.progress === 100) {
        let completeEvent = Object.assign({}, baseInsightsObject)
        completeEvent.eventName = 'videoComplete'

        this.insights.trackEvent(completeEvent)
      }
    }

    // Insights event: videoContentComplete
    if (previous < contentComplete && current >= contentComplete) {
      let videoContentCompleteEvent = Object.assign({}, baseInsightsObject)
      videoContentCompleteEvent.eventName = 'videoContentComplete'

      this.insights.trackEvent(videoContentCompleteEvent)
    }
  }

  parseHtml(htmlString) {
    if (htmlString && htmlString.length) {
      let parser = new window.DOMParser()
      let xmlDoc = parser.parseFromString(htmlString, 'text/html')

      return xmlDoc
    }
  }

  renderVideo() {
    let { item, hideType, hideAbstract } = this.props
    let durationSegments = item.duration.split(':')

    let dom = this.parseHtml(`<div id="temporaryId">${item.html}</div>`)
    let parentDiv = dom.querySelector('.HwMedia')
    let h3 = dom.querySelector('h3')
    let videoContainer = dom.querySelector('.HwVideo')
    let video = dom.querySelector('video')
    let track = video.querySelector('track')

    // optionally insert "Video" type label (per HW style)
    if (!hideType) {
      let type = document.createElement('p')
      type.textContent = 'Video'
      type.className = styles.videoType
      parentDiv.insertBefore(type, h3)
    }

    // the html from the API doesn't have the abstract, so we insert it here
    if (!hideAbstract) {
      let abstract = document.createElement('p')
      abstract.textContent = item.abstract.consumer
      parentDiv.insertBefore(abstract, videoContainer)
    }

    if (typeof track !== 'undefined') {
      // this next bit converts the cross-domain VTT link to a local one (closed captions don't work cross-domain)
      let vtt = track.getAttribute('src')

      if (vtt && this.props.vttRoot) {
        let newVtt = vtt.replace('//', '')
        newVtt = this.props.vttRoot + newVtt.substring(newVtt.indexOf('/'))
        track.setAttribute('src', newVtt)
      }
    }

    // change duration format from 00:00:00 to 00:00 (when the video isn't hours long)
    if (durationSegments.length === 3 && durationSegments[0] === '00') {
      durationSegments.shift()
    }

    // add duration to the title
    h3.textContent = h3.textContent + ' (' + durationSegments.join(':') + ')'
    video.setAttribute('id', item.id)
    video.className +=
      ' video-js vjs-default-skin vjs-16-9 vjs-big-play-centered ' + styles.video_js

    return <div dangerouslySetInnerHTML={{ __html: dom.getElementById('temporaryId').innerHTML }} />
  }

  render() {
    let { item, hideDisclaimer } = this.props
    const renderVideo = this.renderVideo

    return (
      <div>
        {renderVideo()}
        <MediaCredits
          hideDisclaimer={hideDisclaimer}
          asOfDate={item.certifiedDate}
          legal={item.legal || undefined}
          credits={item.credits || undefined}
          transcriptHtml={item.transcript.html}
        />
      </div>
    )
  }
}

Video.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    legal: PropTypes.object,
    html: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    transcript: PropTypes.shape({
      html: PropTypes.string,
    }).isRequired,
  }).isRequired,
  vttRoot: PropTypes.string,
  setFocus: PropTypes.bool,
  hideType: PropTypes.bool,
  hideAbstract: PropTypes.bool,
  hideDisclaimer: PropTypes.bool,
  onStart: PropTypes.func,
  onEnd: PropTypes.func,
  onProgress: PropTypes.func,
}

Video.defaultProps = {
  hideType: false,
  hideAbstract: false,
  hideDisclaimer: false,
  onStart: function() {},
  onProgress: function() {},
  onEnd: function() {},
}

export default Video
