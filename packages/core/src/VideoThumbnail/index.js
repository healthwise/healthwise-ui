import React, { Component } from 'react'
import styled, { withTheme } from 'styled-components'
import PropTypes from 'prop-types'

import { defaultTheme } from '../Theme'

const Videothumbnail = styled.button`
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 100%;
  border: none;

  &:focus {
    outline: ${props => props.theme.focusIndicator};
    outline-offset: ${props => props.theme.focusIndicatorOffset};
  }

  &:hover .hw-video-thumbnail-overlay,
  &:focus .hw-video-thumbnail-overlay {
    opacity: 1;
  }

  & rect {
    fill: ${props => props.theme.colorPrimary};
    fill-opacity: 0.8;
  }
`

const VideoThumbnailImage = styled.img`
  box-sizing: border-box;
  width: 100%;
  height: auto;
`

const VideoThumbnailOverlay = styled.span`
  box-sizing: border-box;
  position: absolute;
  display: block;
  width: 3em;
  height: 3em;
  left: 50%;
  top: 50%;
  transform: translate(-1.5em, -1.5em);
  opacity: 0;
  transition: opacity 0.2s ease-out;
`

const VideoThumbnailIcon = styled.svg`
  width: 100%;
  height: auto;
`

class VideoThumbnail extends Component {
  render() {
    const { title, src, alt, onThumbnailClick, theme, ...otherProps } = this.props
    const thumbSrc = src.replace('_640x360.jpg', '.jpg').replace('.jpg', '_640x360.jpg') // Normalize to correct aspect ratio
    return (
      <Videothumbnail
        type="button"
        className={`hw-video-thumbnail`}
        onClick={onThumbnailClick}
        theme={theme}
        {...otherProps}
      >
        <VideoThumbnailImage
          className={`hw-video-thumbnail-image`}
          src={thumbSrc}
          alt={alt || `open video: ${title}`}
        />
        <VideoThumbnailOverlay className={`hw-video-thumbnail-overlay`}>
          <VideoThumbnailIcon
            focusable="false"
            aria-hidden="true"
            role="presentation"
            className={'hw-video-thumbnail-icon'}
            width="40"
            height="40"
            viewBox="0 0 40 40"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <rect x="0" y="0" width="40" height="40" />
              <g transform="translate(12.5, 12.5)">
                <polygon points="5 3.125 5 11.875 11.875 7.5" fill="#fafafa" />
              </g>
            </g>
          </VideoThumbnailIcon>
        </VideoThumbnailOverlay>
      </Videothumbnail>
    )
  }
}

VideoThumbnail.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onThumbnailClick: PropTypes.func,
  theme: PropTypes.shape({
    colorPrimary: PropTypes.string,
    focusIndicator: PropTypes.string,
    focusIndicatorOffset: PropTypes.string,
  }),
}

VideoThumbnail.defaultProps = {
  theme: defaultTheme,
}

export default withTheme(VideoThumbnail)
