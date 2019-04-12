import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Insights from '../Insights'
import Slideshow from '../Slideshow'
import MediaServiceVideo from '../MediaServiceVideo'
import Image from './Image'

const SvgVideoThumbnailOverlay = styled.svg`
  position: absolute;
  top: 25%;
  left: 25%;
  width: 50%;
  height: 50%;
`

const SectionGallery = styled.section`
  padding: 0 48px;
  margin-bottom: 40px;

  h3,
  :global(.HwCmd) {
    margin: 0.5em 0;
    font-size: 1.375em;
    line-height: 1.1em;
    font-weight: normal;
    color: #212121;
  }

  :global(.HwInfo),
  :global(.HwVideo) {
    padding: 8px;
    border: 1px solid #abb2c1;
    line-height: 0;
  }

  :global(.HwInfo) {
    text-align: center;
  }

  :global(.HwInfo) p,
  :global(.HwVideo) p {
    padding: 0 8px;
    line-height: 1.3em;
    text-align: left;
  }

  :global(.HwImageWrapper) {
    display: inline-block;
    width: 50%;
    padding: 8px;
    box-sizing: border-box;
    text-align: center;
  }

  :global(.HwImageWrapper:only-of-type) {
    float: none;
    width: 100%;
  }

  :global(.HwImageWrapper) img {
    max-width: 100%;
  }

  :global(.HwInfo .HwSection) {
    clear: both;
  }

  @media screen and (max-width: 750px) {
    padding: 0;

    :global(.HwImageWrapper) {
      float: none;
      width: 100%;
    }

    :global(.HwMedicalImage) {
      width: 100%;
    }
  }
`

const UlList = styled.ul`
  margin: 0;
  padding: 0;

  li {
    display: inline-block;
    margin-right: 4px;
  }
`

const ThumbnailButton = styled.button`
  position: relative;
  overflow: hidden;
  display: block;
  margin: 0;
  padding: 0;
  width: 84px;
  height: 56px;
  border: 1px solid #abb2c1;
  cursor: pointer;

  :focus,
  :hover {
    border: 1px solid #99caeb;
    outline: 2px solid #000;
  }

  img {
    width: 84px;
    height: 56px;
  }
`

const ActiveThumbnailButton = styled.ThumbnailButton`
  border: 1px solid #017acd;
`

class MediaGallery extends Component {
  constructor(props) {
    super(props)

    this.onThumbnailClick = this.onThumbnailClick.bind(this)
    this.onSlideSelected = this.onSlideSelected.bind(this)
    this.parseHtml = this.parseHtml.bind(this)

    this.slideClass = 'mediaGallerySlide_'
    this.insights = new Insights()

    this.state = { currentSlide: 0 }
  }

  parseHtml(htmlString) {
    if (htmlString && htmlString.length) {
      let parser = new window.DOMParser()
      let xmlDoc = parser.parseFromString(htmlString, 'text/html')

      return xmlDoc
    }
  }

  getUrlFromDomString(html) {
    const dom = this.parseHtml(html)
    const src = dom && dom.querySelector('img').getAttribute('src')
    const dotIndex = src.lastIndexOf('.')

    return src && src.substring(0, dotIndex) + '_tt' + src.substring(dotIndex)
  }

  onThumbnailClick(index, item) {
    const gallery = this.props.item
    const galleryTypes = {
      hwVideo: 'video',
      hwSlideshow: 'slideshow',
      'Product Map': 'article',
      hwMedia: 'image',
    }
    let insightsObj = {
      pageName: document.title,
      eventName: 'galleryNav',
      galleryHwid: gallery.id,
      thumbnailType: galleryTypes[item.type],
      targetHwid: item.id,
      targetTitle: item.title.consumer,
      navIndex: index + 1,
      navItems: gallery.topics.length,
    }

    this.insights.trackEvent(insightsObj)

    this.setState({ currentSlide: index }, () => {
      // this focuses the slide on click, for accessibility/screen reader purposes
      this.slide.focus()
    })

    // fire props callback
    this.props.onThumbnailClick(index + 1, item)
  }

  onSlideSelected(index, item) {
    // fire props callback
    this.props.onSlideSelected(index, item)
  }

  render() {
    const { item, mediaHash, mediaServiceUrl, mediaToken } = this.props
    const onThumbnailClick = this.onThumbnailClick
    const onSlideSelected = this.onSlideSelected
    let itemList = item

    if (item && item.topics) {
      let slides = []
      let thumbnails = []

      const currentSlide =
        itemList.topics.length > this.state.currentSlide ? this.state.currentSlide : 0

      itemList.topics.forEach((item, i) => {
        const activeThumbnail = currentSlide === i ? true : false
        const userIndex = i + 1

        switch (item.type) {
          case 'hwVideo':
            thumbnails.push(
              <li key={i}>
                {activeThumbnail ? (
                  <ActiveThumbnailButton
                    type="button"
                    aria-controls="hwGallery_slide"
                    onClick={() => {
                      onThumbnailClick(i, item)
                    }}
                  >
                    <img
                      src={item.thumbnail}
                      alt={`load video, ${userIndex} of ${itemList.topics.length} items`}
                    />
                    <SvgVideoThumbnailOverlay
                      role="presentation"
                      focusable="false"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <rect fillOpacity="0.8" fill="#017ACD" x="0" y="0" width="40" height="40" />
                        <g transform="translate(12.5, 12.5)" fill="#FAFAFA">
                          <polygon points="5 3.125 5 11.875 11.875 7.5" />
                        </g>
                      </g>
                    </SvgVideoThumbnailOverlay>
                  </ActiveThumbnailButton>
                ) : (
                  <ThumbnailButton
                    type="button"
                    aria-controls="hwGallery_slide"
                    onClick={() => {
                      onThumbnailClick(i, item)
                    }}
                  >
                    <img
                      src={item.thumbnail}
                      alt={`load video, ${userIndex} of ${itemList.topics.length} items`}
                    />
                    <SvgVideoThumbnailOverlay
                      role="presentation"
                      focusable="false"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <rect fillOpacity="0.8" fill="#017ACD" x="0" y="0" width="40" height="40" />
                        <g transform="translate(12.5, 12.5)" fill="#FAFAFA">
                          <polygon points="5 3.125 5 11.875 11.875 7.5" />
                        </g>
                      </g>
                    </SvgVideoThumbnailOverlay>
                  </ThumbnailButton>
                )}
              </li>
            )
            slides.push(
              <div className="slide" key={i}>
                <MediaServiceVideo
                  hideDisclaimer
                  item={item}
                  mediaServiceUrl={mediaServiceUrl}
                  mediaHash={mediaHash}
                  mediaToken={mediaToken}
                />
              </div>
            )
            break

          case 'hwSlideshow':
            let slideshowThumbSrc = this.getUrlFromDomString(item.html)

            thumbnails.push(
              <li key={i}>
                {activeThumbnail ? (
                  <ActiveThumbnailButton
                    type="button"
                    aria-controls="hwGallery_slide"
                    onClick={() => {
                      onThumbnailClick(i, item)
                    }}
                  >
                    <img
                      src={slideshowThumbSrc}
                      alt={`load slideshow, ${userIndex} of ${itemList.topics.length} items`}
                    />
                  </ActiveThumbnailButton>
                ) : (
                  <ThumbnailButton
                    type="button"
                    aria-controls="hwGallery_slide"
                    onClick={() => {
                      onThumbnailClick(i, item)
                    }}
                  >
                    <img
                      src={slideshowThumbSrc}
                      alt={`load slideshow, ${userIndex} of ${itemList.topics.length} items`}
                    />
                  </ThumbnailButton>
                )}
              </li>
            )
            slides.push(
              <div className="slide" key={i}>
                <Slideshow hideDisclaimer item={item} onSlideSelected={onSlideSelected} />
              </div>
            )
            break

          case 'hwMedia':
            let mediaThumbSrc = this.getUrlFromDomString(item.html)

            thumbnails.push(
              <li key={i}>
                {activeThumbnail ? (
                  <ActiveThumbnailButton
                    type="button"
                    aria-controls="hwGallery_slide"
                    onClick={() => {
                      onThumbnailClick(i, item)
                    }}
                  >
                    {/* eslint-disable-next-line react-app/jsx-a11y/img-redundant-alt */}
                    <img
                      src={mediaThumbSrc}
                      alt={`load image, ${userIndex} of ${itemList.topics.length} items`}
                    />
                  </ActiveThumbnailButton>
                ) : (
                  <ThumbnailButton
                    type="button"
                    aria-controls="hwGallery_slide"
                    onClick={() => {
                      onThumbnailClick(i, item)
                    }}
                  >
                    {/* eslint-disable-next-line react-app/jsx-a11y/img-redundant-alt */}
                    <img
                      src={mediaThumbSrc}
                      alt={`load image, ${userIndex} of ${itemList.topics.length} items`}
                    />
                  </ThumbnailButton>
                )}
              </li>
            )
            slides.push(
              <div className="slide" key={i}>
                <Image hideDisclaimer item={item} />
              </div>
            )
            break

          default:
        }
      })

      return (
        <SectionGallery>
          <UlList>{thumbnails}</UlList>

          <div
            id="hwGallery_slide"
            aria-live="polite"
            tabIndex="-1"
            ref={div => {
              this.slide = div
            }}
          >
            {slides[currentSlide]}
          </div>
        </SectionGallery>
      )
    } else {
      return null
    }
  }
}

MediaGallery.propTypes = {
  item: PropTypes.object.isRequired,
  onThumbnailClick: PropTypes.func,
  mediaServiceUrl: PropTypes.string,
  mediaHash: PropTypes.string,
  mediaToken: PropTypes.string,
  onSlideSelected: PropTypes.func,
}

MediaGallery.defaultProps = {
  onThumbnailClick: function() {},
  onSlideSelected: function() {},
}

export default MediaGallery
