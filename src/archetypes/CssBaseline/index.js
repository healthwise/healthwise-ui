import { Component } from 'react'
import PropTypes from 'prop-types'

import './CssBaseline.css'

class CssBaseline extends Component {
  render() {
    return this.props.children
  }
}

CssBaseline.propTypes = {
  children: PropTypes.any,
}

CssBaseline.defaultProps = {
  children: null,
}

export default CssBaseline
