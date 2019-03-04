import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'

import { defaultTheme } from '../Theme'

const Heading = styled.h3`
  background-color: ${props => props.theme.colorPrimary};
  padding: ${props => `${props.theme.spacingM} ${props.theme.spacingL}`};
  margin: ${props => `${props.theme.spacingL} 0 ${props.theme.spacingM}`};
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 1.5;
  color: ${props => props.theme.colorTextOnPrimary};

  @media print {
    background: #f5f5f5;
    margin: 4px 0 12px;
    border: 1px solid #ccc;
    padding: 5px 16px;
    font-size: 14px;
    color: #000;
  }
`

class BlockHeading extends Component {
  render() {
    const { className, children, theme } = this.props

    return (
      <Heading className={classNames('hw-block-heading', className)} theme={theme}>
        {children}
      </Heading>
    )
  }
}

BlockHeading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  theme: PropTypes.shape({
    colorPrimary: PropTypes.string,
    colorTextOnPrimary: PropTypes.string,
    spacingM: PropTypes.string,
    spacingL: PropTypes.string,
  })
}

BlockHeading.defaultProps = {
  theme: defaultTheme
}

export default BlockHeading
