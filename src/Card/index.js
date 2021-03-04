import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styled, { withTheme } from 'styled-components'
import { defaultTheme } from '../Theme'

import ButtonGroup from '../ButtonGroup'

const Root = withTheme(styled.div`
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 2px 1px -1px rgb(0 0 0 / 12%);
  background: ${props => props.theme.colorBackgroundLight || '#fff'};
`)

const CardContent = withTheme(styled.div`
  padding: ${props => props.theme.spacingL || '24px'};
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
`)

const CardMedia = styled.img`
  width: 100%;
`

const TitleContainer = styled.div`
  padding: ${props =>
    props.hasContent ? `${props.theme.spacingL} ${props.theme.spacingL} 0` : props.theme.spacingL};
`

const Title = styled.h2`
  margin: 0;
  color: ${props => props.theme.colorTextPrimary};
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.333;
`

const Subtitle = styled.h3`
  margin: 0;
  color: ${props => props.theme.colorTextSecondary};
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.4;
`

const Actions = styled.div`
  padding: ${props => `0 ${props.theme.spacingL} ${props.theme.spacingL}`};
`

class Card extends Component {
  render() {
    const {
      children,
      className,
      mediaSrc,
      mediaAltText,
      actions,
      title,
      subtitle,
      theme,
      ...otherProps
    } = this.props

    const hasContent = React.Children.count(children) > 0

    return (
      <Root className={classNames('hw-card', className)} {...otherProps}>
        {mediaSrc && <CardMedia className="hw-card-media" src={mediaSrc} alt={mediaAltText} />}

        {(title || subtitle) && (
          <TitleContainer className="hw-card-title-container" hasContent={hasContent} theme={theme}>
            {title && (
              <Title className="hw-card-title" theme={theme}>
                {title}
              </Title>
            )}
            {subtitle && (
              <Subtitle className="hw-card-subtitle" theme={theme}>
                {subtitle}
              </Subtitle>
            )}
          </TitleContainer>
        )}

        {children && <CardContent className="hw-card-content">{children}</CardContent>}

        {actions && (
          <Actions className="hw-card-actions" theme={theme}>
            <ButtonGroup className="hw-card-actions-buttons">{actions}</ButtonGroup>
          </Actions>
        )}
      </Root>
    )
  }
}

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  mediaSrc: PropTypes.string,
  mediaAltText: PropTypes.string,
  actions: PropTypes.any,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  theme: PropTypes.shape({
    colorTextPrimary: PropTypes.string,
    colorTextSecondary: PropTypes.string,
    spacingL: PropTypes.string,
  }),
}

Card.defaultProps = {
  theme: defaultTheme,
}

export default withTheme(Card)
