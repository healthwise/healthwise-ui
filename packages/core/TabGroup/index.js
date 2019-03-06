import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'

import { defaultTheme } from '../Theme'
import Tab from '../Tab'

const Root = styled.ol`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  overflow-x: auto;
  margin: 0;
  padding: 0 ${props => props.theme.spacingL};
  box-sizing: border-box;
  list-style: none;
  width: ${props => props.stretch ? '100%' : 'auto'};

  @media screen and (max-width: 750px) {
    width: 100%;
    padding: 0;
  }
`

const Container = styled.li`
  display: block;
  margin: ${props => `${props.theme.spacingXs} ${props.theme.spacingXs} 0`};
  text-align: center;
  box-sizing: border-box;
  flex: ${props => props.stretch ? '1' : '0 1 auto'};

  :first-child {
    margin-left: 0;
  }

  :last-child {
    margin-right: 0;
  }

  @media screen and (max-width: 750px) {
    width: inherit;
    margin: 5px 2px 0;
  }
`

class TabGroup extends Component {
  constructor() {
    super()
    this.tabGroup = React.createRef()
  }

  componentDidMount() {
    this.scrollToActive()
  }

  scrollToActive() {
    const parent = this.tabGroup.current
    // grab the first active tab, if there is one
    const activeTab = parent && parent.querySelector('.hw-tab-is-active')

    if (parent && activeTab) {
      const parentLeft = parent.offsetLeft
      const parentWidth = parent.offsetWidth
      const tabLeft = activeTab.offsetLeft
      const tabWidth = activeTab.offsetWidth
      const amountToScroll = tabLeft - parentLeft - parentWidth / 2 + tabWidth / 2

      parent.scrollLeft = amountToScroll
    }
  }

  render() {
    const { children, className, stretch, theme, ...otherProps } = this.props

    return (
      <Root
        ref={this.tabGroup}
        className={classNames('hw-tab-group', className)}
        stretch={stretch}
        theme={theme}
        {...otherProps}
      >
        {React.Children.map(children, (tab, index) => (
          <Container key={index} stretch={stretch} theme={theme}>
            {tab}
          </Container>
        ))}
      </Root>
    )
  }
}

TabGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.shape({ type: PropTypes.oneOf([Tab]) }),
    PropTypes.arrayOf(PropTypes.shape({ type: PropTypes.oneOf([Tab]) })),
  ]),
  className: PropTypes.string,
  stretch: PropTypes.bool,
  theme: PropTypes.shape({
    spacingXs: PropTypes.string,
    spacingL: PropTypes.string,
  })
}

TabGroup.defaultProps = {
  stretch: true,
  theme: defaultTheme,
}

export default TabGroup
