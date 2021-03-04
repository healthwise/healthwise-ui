import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled, { withTheme } from 'styled-components'

import { defaultTheme } from '../Theme'

// Map align prop to justify-content value
const alignMap = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
}

const Root = styled.div`
  display: flex;
  align-content: center;
  justify-content: ${props => alignMap[props.align]};

  & > *:not(:last-child) {
    margin-right: ${props => props.theme.spacingS};
  }
`

class ButtonGroup extends React.Component {
  render() {
    let { children, className, ...otherProps } = this.props

    return (
      <Root className={classNames('hw-button-group', className)} {...otherProps}>
        {children}
      </Root>
    )
  }
}

ButtonGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  theme: PropTypes.shape({
    spacingS: PropTypes.string,
  }),
}

ButtonGroup.defaultProps = {
  align: 'left',
  theme: defaultTheme,
}

export default withTheme(ButtonGroup)
