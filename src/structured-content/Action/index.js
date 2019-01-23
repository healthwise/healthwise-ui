import React from 'react'
import PropTypes from 'prop-types'

import styles from './Action.css'

class Action extends React.Component {
  render() {
    let { data, ...otherProps } = this.props
    const outerClasses = 'hw-content-action ' + styles.action

    return (
      <div
        className={outerClasses}
        {...otherProps}
        dangerouslySetInnerHTML={{ __html: data.html }}
      />
    )
  }
}

Action.propTypes = {
  data: PropTypes.shape({
    html: PropTypes.string,
  }),
}

export default Action
