import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled, { withTheme } from 'styled-components'

import { defaultTheme } from '../Theme'

const FooterContent = styled.footer`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  border-top: 1px solid ${props => props.theme.colorBorder};
  box-sizing: border-box;

  @media screen and (max-width: 1040px) {
    padding: 0 ${props => `${props.theme.spacingL}`};
  }

  @media screen and (max-width: 750px) {
    padding: 0 ${props => `${props.theme.spacingM}`};
  }

  @media print {
    padding: 0;
  }
`

FooterContent.defaultProps = {
  theme: defaultTheme,
}

class Footer extends Component {
  render() {
    const { className, children, theme } = this.props

    return (
      <FooterContent className={classNames('hw-content-footer', className)} theme={theme}>
        {children}
      </FooterContent>
    )
  }
}

Footer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  theme: PropTypes.shape({
    colorBorder: PropTypes.string,
    spacingM: PropTypes.string,
    spacingL: PropTypes.string,
  }),
}

export default withTheme(Footer)
