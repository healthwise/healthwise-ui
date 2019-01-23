import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './Image.css'

class Image extends React.Component {
  render() {
    const { id, className, src, alt, ...otherProps } = this.props

    const imageClass = classNames('hw-image', styles.image, className)

    return <img id={id} className={imageClass} src={src} alt={alt} {...otherProps} />
  }
}

Image.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
}

Image.defaultProps = {
  alt: '',
}

export default Image
