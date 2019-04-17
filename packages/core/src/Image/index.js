import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled, { withTheme } from 'styled-components'

const Img = styled.img`
  width: 100%;
  height: auto;
`

class Image extends React.Component {
  render() {
    const { className, ...otherProps } = this.props

    return <Img className={classNames('hw-image', className)} {...otherProps} />
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

export default withTheme(Image)
