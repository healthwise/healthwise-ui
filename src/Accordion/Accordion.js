import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled, { withTheme } from 'styled-components'

import { defaultTheme } from '../Theme'

const Root = styled.div`
  margin: 0;
  border: 1px solid ${({ theme }) => theme.colorBorder || '#727272'};
  background: ${({ theme }) => theme.colorBackgroundLight || '#fff'};
  box-shadow: none;

  &[aria-disabled='true'] {
    opacity: 0.35;
  }
  &:last-child: {
    border-radius: 0;
  }
  &:first-child: {
    border-radius: 0;
  }
`

const ToggleButton = styled.button`
  display: block;
  width: 100%;
  position: relative;
  padding: ${({ theme }) => theme.spacingM || '16px'} ${({ theme }) => theme.spacingL || '24px'};
  min-height: 0;
  text-align: left;
  background: ${({ theme }) => theme.colorBackgroundLight || '#fff'};
  box-shadow: none;
  border: 0;

  :focus {
    outline: ${({ theme }) => theme.focusIndicator || '2px dotted #424242'};
    outline-offset: ${({ theme }) => theme.focusIndicatorOffset || '2px'};
  }
  &[aria-expanded='true'] {
    min-height: 0;
  }
`

const Title = styled.h3`
  width: 100%;
  position: relative;
  margin: 0;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.5;
  margin-right: ${({ theme }) => theme.spacingXxl || '64px'};
  color: ${({ theme }) => theme.colorTextPrimary || '#424242'};
`

const Icon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`

const CollapseIcon = styled.span`
  color: ${({ theme }) => theme.colorTextSecondary || '#676767'};
`
const ExpandIcon = styled.span`
  color: ${({ theme }) => theme.colorTextSecondary || '#676767'};
`

const Content = styled.div`
  padding: ${({ theme }) => theme.spacingM || '16px'} ${({ theme }) => theme.spacingL || '24px'}
    ${({ theme }) => theme.spacingL || '24px'};

  &[aria-hidden='true'] {
    display: none;
  }

  & > :first-child {
    margin-top: 0;
  }
  & > :last-child {
    margin-bottom: 0;
  }
`

class Accordion extends Component {
  constructor(props) {
    super(props)

    this.uniqueId = `hw-accordion_${new Date().getTime()}_${Math.floor(
      Math.random() * Math.floor(1337)
    )}`
    this.state = {
      isOpen: props.defaultExpanded || props.expanded,
    }

    this.toggle = this.toggle.bind(this)
  }

  componentDidUpdate() {
    if (this.props.hasOwnProperty('expanded') && this.props.expanded !== this.state.isOpen) {
      this.setState({ isOpen: this.props.expanded })
    }
  }

  toggle() {
    this.props.onChange && this.props.onChange(!this.state.isOpen)
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    const {
      children,
      className,
      title,
      theme,
      disabled,
      tabIndex,
      defaultExpanded,
      expanded,
      ...otherProps
    } = this.props

    return (
      <Root
        className={classNames('hw-accordion', className)}
        aria-label="Accordion Control"
        aria-disabled={disabled}
        {...otherProps}
      >
        <ToggleButton
          aria-controls={this.uniqueId}
          aria-expanded={this.state.isOpen}
          tabIndex={disabled ? -1 : tabIndex}
          onClick={this.toggle}
          disabled={disabled}
          theme={theme}
          className="hw-accordion-header"
        >
          <Title className="hw-accordion-title" theme={theme}>
            {title}
            <Icon className="hw-accordion-icon">
              {this.state.isOpen ? (
                <CollapseIcon theme={theme} className="hw-accordion-icon-collapse">
                  －
                </CollapseIcon>
              ) : (
                <ExpandIcon theme={theme} className="hw-accordion-icon-expand">
                  ＋
                </ExpandIcon>
              )}
            </Icon>
          </Title>
        </ToggleButton>
        <Content
          id={this.uniqueId}
          aria-hidden={!this.state.isOpen}
          theme={theme}
          tabIndex="-1"
          className="hw-accordion-content"
        >
          {children}
        </Content>
      </Root>
    )
  }
}

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  defaultExpanded: PropTypes.bool,
  expanded: PropTypes.bool,
  disabled: PropTypes.bool,
  tabIndex: PropTypes.number,
  onChange: PropTypes.func,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  // TODO: update this propType with all the variables being used in the accordion
  theme: PropTypes.shape({
    colorTextPrimary: PropTypes.string,
    spacingXxl: PropTypes.string,
  }),
}

Accordion.defaultProps = {
  defaultExpanded: false,
  tabIndex: 0,
  theme: defaultTheme,
}

export default withTheme(Accordion)
