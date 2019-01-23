import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './Footer.css'

class Footer extends Component {
  render() {
    const classnames = classNames('hw-content-footer', styles.content_footer)

    return <footer className={classnames}>{this.props.children}</footer>
  }
}

Footer.propTypes = {
  children: PropTypes.node,
}

export default Footer
