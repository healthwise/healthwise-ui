import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'

const Root = styled.div`
  display: none;
  @media print {
    display: block;
  }
`

class PrintOnly extends Component {
  render() {
    return (
      <Root className="hw-print-only" aria-hidden="true">
        {this.props.children}
      </Root>
    )
  }
}

PrintOnly.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withTheme(PrintOnly)
