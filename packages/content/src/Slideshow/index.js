import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Insights from '../Insights'
import MediaCredits from '../MediaCredits'

const UlNav = styled.span`
  margin: 0;
  padding: 0;

  li {
    display: inline-block;
    margin-right: 4px;
  }
`

const NavItemButton = styled.button`
  display: block;
  width: 36px;
  height: 36px;
  line-height: 32px;
  font-size: 1em;
  text-align: center;
  padding-left: 0;
  padding-right: 0;
  background: #fff;
  border: 1px solid #abb2c1;
  border-radius: 1px;

  :focus,
  :hover {
    background: #99caeb;
    outline: solid 1px #000;
    outline-offset: 1px;
    cursor: pointer;
  }

  @media screen and (-ms-high-contrast: active) {
    background: #000;
    border: 1px solid #fff;

    :focus,
    :hover {
      background: #fff;
      color: #000;
    }
  }

  @media screen and (-ms-high-contrast: black-on-white) {
    background: #fff;
    border: 1px solid #000;

    :focus,
    :hover {
      background: #000;
      color: #fff;
    }
  }
`

const NavItemActiveButton = styled.button`
  display: block;
  width: 36px;
  height: 36px;
  line-height: 32px;
  font-size: 1em;
  text-align: center;
  padding-left: 0;
  padding-right: 0;
  background: #fff;
  border: 1px solid #abb2c1;
  border-radius: 1px;

  :focus,
  :hover {
    background: #99caeb;
    outline: solid 1px #000;
    outline-offset: 1px;
    cursor: pointer;
  }

  @media screen and (-ms-high-contrast: active) {
    background: #000;
    border: 1px solid #fff;

    :focus,
    :hover {
      background: #fff;
      color: #000;
    }
  }

  @media screen and (-ms-high-contrast: black-on-white) {
    background: #fff;
    border: 1px solid #000;

    :focus,
    :hover {
      background: #000;
      color: #fff;
    }
  }

  background: #017acd;
  border: 1px solid #abb2c1;
  color: #fff;

  @media screen and (-ms-high-contrast: active) {
    background: #fff;
    border: 1px solid #000;
    color: #000;
  }

  @media screen and (-ms-high-contrast: black-on-white) {
    background: #000;
    border: 1px solid #fff;
    color: #fff;
  }
`

/* ensures that larger images don't exceed the slideshow wrapper */
const SlideshowDiv = styled.Div`
  max-width: 100%;
`

class Slideshow extends Component {
  constructor(props) {
    super(props)

    if (props.item) {
      const html = this.parseHtml(props.item.html)
      const lis = html.querySelectorAll('li')

      // set up component state so we can retain the selected thumbnail
      this.state = { currentSlide: 0, lis: lis }

      this.insights = new Insights()

      this.onNavClick = this.onNavClick.bind(this)
      this.renderSlide = this.renderSlide.bind(this)
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.item && nextProps.item.html !== this.props.item.html) {
      const html = this.parseHtml(nextProps.item.html)
      const lis = html.querySelectorAll('li')

      this.setState({ lis: lis })
    }
  }

  parseHtml(htmlString) {
    if (htmlString && htmlString.length) {
      let parser = new window.DOMParser()
      let xmlDoc = parser.parseFromString(htmlString, 'text/html')

      return xmlDoc
    }
  }

  onNavClick(index) {
    const item = this.props.item
    const slide = this.state.lis[index]
    const slideTitle = slide.querySelector('.HwCmd').innerText
    // this parses out the GUID from the IMG src
    const slideSrc = slide.querySelector('img').src
    const slideHwidWithExt = slideSrc.substring(slideSrc.lastIndexOf('/') + 1)
    const slideHwid = slideHwidWithExt.split('.')[0]

    this.insights.trackEvent({
      pageName: document.title,
      eventName: 'slideshowAction',
      slideshowHwid: item.id,
      slideHwid: slideHwid,
      slideTitle: slideTitle,
      slideIndex: index + 1,
      slideshowItems: this.state.lis.length,
    })

    this.props.onSlideSelected(index + 1, item)

    this.setState({ currentSlide: index })
  }

  renderSlide() {
    const lis = this.state.lis

    if (lis.length) {
      return (
        <div
          className="hw-sc-slideshow-slide"
          dangerouslySetInnerHTML={{ __html: lis[this.state.currentSlide].innerHTML }}
        />
      )
    }
  }

  renderNavigation() {
    const onNavClick = this.onNavClick
    const len = this.state.lis.length
    const current = this.state.currentSlide + 1
    const navLis = []

    if (len > 1) {
      for (var i = 1; i <= len; i++) {
        const num = i
        const currentItem = i === current

        /* eslint-disable react/jsx-no-bind */
        navLis.push(
          <li key={'nav_' + i}>
            {currentItem ? (
              <NavItemActiveButton
                type="button"
                onClick={function() {
                  onNavClick(num - 1)
                }}
              >
                {i}
              </NavItemActiveButton>
            ) : (
              <NavItemButton
                type="button"
                onClick={function() {
                  onNavClick(num - 1)
                }}
              >
                {i}
              </NavItemButton>
            )}
          </li>
        )
        /* eslint-enable react/jsx-no-bind */
      }
    }

    return <UlNav>{navLis}</UlNav>
  }

  render() {
    let { item, hideDisclaimer } = this.props
    let toReturn = null

    let previewItems = []
    this.state.lis.forEach(function(element, i) {
      const src = element.querySelector('img').src
      previewItems.push(<img src={src} alt="" key={'preload-image-' + i} />)
    })

    if (item) {
      toReturn = (
        <SlideshowDiv className={'hw-sc-slideshow'}>
          {this.renderSlide()}
          <MediaCredits
            hideDisclaimer={hideDisclaimer}
            asOfDate={item.certifiedDate}
            legal={item.legal}
            credits={item.credits}
          />
          {this.renderNavigation()}
          <div style={{ display: 'none' }} aria-hidden="true">
            {previewItems}
          </div>
        </SlideshowDiv>
      )
    }

    return toReturn
  }
}

Slideshow.propTypes = {
  item: PropTypes.object.isRequired,
  hideDisclaimer: PropTypes.bool,
  onSlideSelected: PropTypes.func,
}

Slideshow.defaultProps = {
  hideDisclaimer: false,
  onSlideSelected: function() {},
}

export default Slideshow
