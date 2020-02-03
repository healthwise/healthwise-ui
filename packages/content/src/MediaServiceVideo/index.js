import React, { Component } from 'react'
import MediaCredits from '../MediaCredits'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SpanAbstract = styled.span`
  padding-left: 0;
  padding-right: 0;
  display: block;
  margin: 1em 0;
`

const H3Title = styled.h3`
  margin: 0.5em 0;
  font-size: 1.375em;
  line-height: 1.1em;
  font-weight: 400;
`

const SpanType = styled.span`
  font-size: 0.75em;
  margin: 0.75em 0 0;
  padding-left: 0;
  padding-right: 0;
  display: block;
`

const Video = styled.div`
  width: 100%;
`

class MediaServiceVideo extends Component {
  constructor(props) {
    super(props)
    this.updateVideoHeight = this.updateVideoHeight.bind(this)
  }

  getVideoInformationFromUrl(html) {
    const dom = this.parseHtml(html)
    const src = dom && dom.querySelector('source').getAttribute('src')
    const parts = src.split('/')
    const partsNames = ['version', 'lang', 'id']
    const partsToReturn = {}

    let partIndex = 0
    let shouldProcess = false
    for (let i = 0; i < parts.length; i++) {
      const candidate = parts[i]
      if (shouldProcess) {
        partsToReturn[partsNames[partIndex]] = candidate
        partIndex++
      }

      if (candidate.indexOf('cloudfront.net') !== -1) {
        shouldProcess = true
      }

      if (partIndex === partsNames.length) {
        break
      }
    }

    return partsToReturn
  }

  parseHtml(htmlString) {
    if (htmlString && htmlString.length) {
      let parser = new window.DOMParser()
      let xmlDoc = parser.parseFromString(htmlString, 'text/html')

      return xmlDoc
    }
  }

  updateVideoHeight() {
    if (this.videoElement) {
      const box = this.videoWrapperElement.getBoundingClientRect()
      const aspectRatio = 1.77777777778 // 16/9
      if (box.width > 0) {
        const height = box.width / aspectRatio
        this.videoElement.style.height = height + 'px'
      }
    }
  }

  componentDidMount() {
    setTimeout(this.updateVideoHeight, this.props.updateTimeout)
    window.addEventListener('resize', this.updateVideoHeight)
  }

  componentDidUpdate() {
    this.updateVideoHeight()
  }

  render() {
    let {
      item,
      hideDisclaimer,
      hideAbstract,
      hideType,
      mediaServiceUrl,
      mediaHash,
      mediaToken,
      videoLabel,
    } = this.props
    const videoParts = this.getVideoInformationFromUrl(item.html)
    const videoUrl = `${mediaServiceUrl}/html/${mediaToken}/${videoParts.id}/${videoParts.lang}?autostart=false&rt=${mediaToken}&hash=${mediaHash}&disclaimer=false`
    let abstract = null
    let type = null
    let title = null

    if (!hideAbstract) {
      const dom = this.parseHtml(`<div>${item.html}</div>`)
      abstract = <SpanAbstract>{item.abstract.consumer}</SpanAbstract>
      title = <H3Title>{dom.querySelector('h3').firstChild.nodeValue}</H3Title>
    }

    if (!hideType) {
      type = <SpanType>{videoLabel}</SpanType>
    }

    return (
      <Video
        ref={el => {
          this.videoWrapperElement = el
        }}
      >
        {type}
        {title}
        {abstract}
        <Video
          as="iframe"
          ref={el => {
            this.videoElement = el
          }}
          title="Video"
          className={`hw-slide-video`}
          src={videoUrl}
          frameBorder="0"
          scrolling="no"
          allowFullScreen
        />
        <MediaCredits
          hideDisclaimer={hideDisclaimer}
          asOfDate={item.certifiedDate}
          legal={item.legal || undefined}
          credits={item.credits || undefined}
          transcriptHtml={item.transcript.html}
        />
      </Video>
    )
  }
}

MediaServiceVideo.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    legal: PropTypes.object,
    html: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    transcript: PropTypes.shape({
      html: PropTypes.string,
    }).isRequired,
  }).isRequired,
  hideDisclaimer: PropTypes.bool,
  hideAbstract: PropTypes.bool,
  hideType: PropTypes.bool,
  updateTimeout: PropTypes.number,
  videoLabel: PropTypes.string,
  mediaServiceUrl: PropTypes.string,
  mediaHash: PropTypes.string,
  mediaToken: PropTypes.string,
}

MediaServiceVideo.defaultProps = {
  hideDisclaimer: false,
  hideAbstract: false,
  updateTimeout: 0,
  videoLabel: 'Video',
}

export default MediaServiceVideo
