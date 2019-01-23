import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './PrintOnly.css'

class PrintOnly extends Component {
  render() {
    return (
      <div className={`hw-print-only ${styles.PrintOnly}`} aria-hidden="true">
        {this.props.children}
      </div>
    )
  }
}

PrintOnly.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PrintOnly
