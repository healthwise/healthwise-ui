import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './BlockHeading.css'

class BlockHeading extends Component {
  render() {
    const headingClasses = classNames({
      'hw-block-heading': true,
      [styles.block_heading]: true,
    })
    const textClasses = classNames({
      'hw-block-heading-text': true,
      [styles.block_heading_text]: true,
    })

    return (
      <h3 className={headingClasses}>
        <span className={textClasses}>{this.props.children}</span>
      </h3>
    )
  }
}

BlockHeading.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlockHeading
