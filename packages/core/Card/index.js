import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import MuiCard from '@material-ui/core/Card'
import MuiCardContent from '@material-ui/core/CardContent'
import MuiCardMedia from '@material-ui/core/CardMedia'
import { withStyles } from '@material-ui/core/styles'
import styled from 'styled-components'

import ButtonGroup from '../ButtonGroup'
import { defaultTheme } from '../Theme'

// TODO: Material UI doesn't support overriding a theme locally by using the
// theme prop, like styled-components does. The theme argument in the
// withStyles function can only be updated using the MuiThemeProvider. The
// @material-ui/styles package (currently in alpha) is supposed to release
// with material-ui v4, and will support this functionality. Until then, we
// need these inline default values, to support a component having a default
// theme without requiring the consumer to use a ThemeProvider component in
// their app.
const Root = withStyles(theme => ({
  root: {
    background: theme.colorBackgroundLight || '#fff',
  },
}))(MuiCard)

const CardContent = withStyles(theme => ({
  root: {
    padding: theme.spacingL || '24px',
    '& > *:first-child': {
      marginTop: 0,
    },
    '& > *:last-child': {
      marginBottom: 0,
    },
  },
}))(MuiCardContent)

const CardMedia = withStyles(theme => ({
  root: {
    height: 0,
    paddingTop: '56.25%' /* 16:9 */,
  },
}))(MuiCardMedia)

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
        {mediaSrc && <CardMedia className="hw-card-media" image={mediaSrc} title={mediaAltText} />}
        {(title || subtitle) && (
          <TitleContainer hasContent={hasContent} theme={theme}>
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
          <Actions theme={theme}>
            <ButtonGroup className="hw-card-actions">{actions}</ButtonGroup>
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

export default Card
