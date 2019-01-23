import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './Button.css'

class Button extends Component {
  render() {
    const {
      className,
      disabled,
      flat,
      href,
      outlined,
      raised,
      render,
      rounded,
      theme,
      ...otherProps
    } = this.props

    const buttonClass = classNames(
      'hw-button',
      styles.button,
      styles[theme],
      { [styles.rounded]: rounded },
      { [styles.flat]: flat },
      { [styles.raised]: raised },
      { [styles.outlined]: outlined },
      { [styles.disabled]: disabled },
      className
    )

    const ariaProps = href || otherProps.to ? { role: 'button', 'aria-disabled': disabled } : {}

    // Wrap all children in a div to allow setting margin on text nodes
    const children = React.Children.map(this.props.children, (child, index) => (
      <div key={index} className={styles.child}>
        {child}
      </div>
    ))

    const props = {
      className: buttonClass,
      disabled,
      href,
      ...ariaProps,
      ...otherProps,
    }

    if (render) {
      return render({ ...props, children })
    } else if (href) {
      return <a {...props}>{children}</a>
    } else {
      return <button {...props}>{children}</button>
    }
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  render: PropTypes.func,
  disabled: PropTypes.bool,
  flat: PropTypes.bool,
  href: PropTypes.string,
  id: PropTypes.string,
  outlined: PropTypes.bool,
  raised: PropTypes.bool,
  rounded: PropTypes.bool,
  theme: PropTypes.oneOf([
    'primary',
    'primary-light',
    'primary-dark',
    'primary-darker',
    'accent',
    'accent-dark',
    'neutral',
    'neutral-light',
    'neutral-dark',
  ]),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
}

Button.defaultProps = {
  theme: 'primary',
}

export default Button
