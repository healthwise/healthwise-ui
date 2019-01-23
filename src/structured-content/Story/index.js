import React from 'react'
import PropTypes from 'prop-types'

import styles from './Story.css'

class Story extends React.Component {
  render() {
    let { data, ...otherProps } = this.props
    const outerClasses = 'hw-content-story ' + styles.story

    return (
      <div
        className={outerClasses}
        dangerouslySetInnerHTML={{ __html: data.html }}
        {...otherProps}
      />
    )
  }
}

Story.propTypes = {
  data: PropTypes.shape({
    html: PropTypes.string,
  }),
}

export default Story
