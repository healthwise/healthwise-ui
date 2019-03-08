import React, { Component } from 'react'
import PropTypes from 'prop-types'

import MediaCredits from '../MediaCredits'

class Image extends Component {
  constructor(props) {
    super(props)

    this.parseHtml = this.parseHtml.bind(this)
    this.remapHtmlStructure = this.remapHtmlStructure.bind(this)
  }

  parseHtml(htmlString) {
    if (htmlString && htmlString.length) {
      let parser = new window.DOMParser()
      let xmlDoc = parser.parseFromString(htmlString, 'text/html')

      return xmlDoc
    }
  }

  // The entire point of this function is to give us a similar structure to a slideshow
  // slide. It wraps the image and paragraph(s) with <div class="HwInfo"></div>
  remapHtmlStructure(html) {
    const serializer = new window.XMLSerializer()
    const dom = this.parseHtml(html)
    const imgContainers = dom.querySelectorAll('.HwImageWrapper')
    const section = dom.querySelector('.HwSection')
    const wrapper = document.createElement('div')
    wrapper.setAttribute('class', 'HwInfo')

    // find the first image wrapper and insert the wrapper div before it
    imgContainers[0].parentNode.insertBefore(wrapper, imgContainers[0])
    // move the image wrapper(s) into it
    for (let i = 0; i < imgContainers.length; i++) {
      wrapper.appendChild(imgContainers[i])
    }
    // move the section (with paragraphs) into it
    wrapper.appendChild(section)

    return serializer.serializeToString(dom)
  }

  render() {
    let { item, hideDisclaimer } = this.props

    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: this.remapHtmlStructure(item.html) }} />

        <MediaCredits
          hideDisclaimer={hideDisclaimer}
          asOfDate={item.certifiedDate}
          legal={item.legal}
          credits={item.credits}
        />
      </div>
    )
  }
}

Image.defaultProps = {
  hideDisclaimer: false,
}

Image.propTypes = {
  item: PropTypes.object,
  hideDisclaimer: PropTypes.bool,
}

export default Image
