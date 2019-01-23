import React, { Component } from 'react'
import styles from './VideoThumbnail.css'
import PropTypes from 'prop-types'

class VideoThumbnail extends Component {
  render() {
    const { title, src, alt, onThumbnailClick, ...otherProps } = this.props
    const thumbSrc = src.replace('_640x360.jpg', '.jpg').replace('.jpg', '_640x360.jpg') // Normalize to correct aspect ratio
    return (
      <button
        type="button"
        className={`hw-video-thumbnail ${styles.videoThumbnail}`}
        onClick={onThumbnailClick}
        {...otherProps}
      >
        <img
          className={`hw-video-thumbnail-image ${styles.videoThumbnailImage}`}
          src={thumbSrc}
          alt={alt || `open video: ${title}`}
        />
        <span className={`hw-video-thumbnail-overlay ${styles.videoThumbnailOverlay}`}>
          <svg
            focusable="false"
            aria-hidden="true"
            role="presentation"
            className={`hw-video-thumbnail-icon ${styles.videoThumbnailIcon}`}
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
          </svg>
        </span>
      </button>
    )
  }
}

VideoThumbnail.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onThumbnailClick: PropTypes.func,
}

export default VideoThumbnail
