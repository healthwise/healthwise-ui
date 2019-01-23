import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import MaterialCard from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import { withStyles } from '@material-ui/core/styles'

import ButtonGroup from '@healthwise/button-group'
import Theme from '@healthwise/theme'
import appTheme from 'appTheme'
import styles from './Card.css'

const theme = Theme(appTheme)

const cardContentStyles = {
  root: {
    padding: theme['spacing-l'],
  },
}
const StyledCardContent = withStyles(cardContentStyles)(CardContent)

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
      ...otherProps
    } = this.props

    const cardClass = classNames('hw-card', styles.card, className)
    const titleContainerClass = classNames(styles.title_container, { [styles.children]: children })

    return (
      <MaterialCard className={cardClass} {...otherProps}>
        {mediaSrc && (
          <CardMedia
            className={`hw-card-media ${styles.media}`}
            image={mediaSrc}
            title={mediaAltText}
          />
        )}
        {(title || subtitle) && (
          <div className={titleContainerClass}>
            {title && <h2 className={`hw-card-title ${styles.title}`}>{title}</h2>}
            {subtitle && <h3 className={`hw-card-subtitle ${styles.subtitle}`}>{subtitle}</h3>}
          </div>
        )}
        {children && (
          <StyledCardContent className={`hw-card-content ${styles.content}`}>
            {children}
          </StyledCardContent>
        )}
        {actions && (
          <div className={styles.actions}>
            <ButtonGroup className="hw-card-actions">{actions}</ButtonGroup>
          </div>
        )}
      </MaterialCard>
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
}

export default Card
