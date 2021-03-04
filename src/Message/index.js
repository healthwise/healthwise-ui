import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled, { withTheme } from 'styled-components'

import { defaultTheme, getThemeVariable } from '../Theme'
import { InfoIcon, WarningIcon } from '../Icon'
import { divide } from 'lodash'

const icons = {
  info: <InfoIcon />,
  warning: <WarningIcon />,
  error: <WarningIcon />,
}

// Map align prop to justify-content value
const alignMap = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
}

const Root = styled.span`
  display: flex;
  align-items: center;
  justify-content: ${props => alignMap[props.align]};
  color: ${getThemeVariable('color')};

  svg {
    fill: ${getThemeVariable('color')};
  }
`

const Icon = styled.div`
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
  flex: 0 0 auto;
`

class Message extends Component {
  render() {
    const { className, children, type, align, showIcon, theme, ...otherProps } = this.props

    return (
      <Root
        className="hw-message-container"
        align={align}
        color={type}
        theme={theme}
        {...otherProps}
      >
        {showIcon && <Icon>{icons[type]}</Icon>}
        <div className={classNames('hw-message', `hw-message-${type}`, className)}>{children}</div>
      </Root>
    )
  }
}

Message.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.oneOf(['info', 'warning', 'error']),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  showIcon: PropTypes.bool,
  theme: PropTypes.shape({
    colorInfo: PropTypes.string,
    colorWarning: PropTypes.string,
    colorError: PropTypes.string,
  }),
}

Message.defaultProps = {
  type: 'info',
  align: 'left',
  showIcon: true,
  theme: defaultTheme,
}

export default withTheme(Message)
