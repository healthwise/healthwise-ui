import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './References.css'

class References extends Component {
  render() {
    const { references, referencesLabel, ...otherAttributes } = this.props
    const referenceElements = []

    for (const reference of references) {
      referenceElements.push(<li key={reference.id}>{reference.title}</li>)
    }

    return (
      <fieldset className={styles.refs_wrapper} {...otherAttributes}>
        <legend className={styles.refs_label}>{referencesLabel}</legend>
        <ol>{referenceElements}</ol>
      </fieldset>
    )
  }
}

References.defaultProps = {
  referencesLabel: 'References',
}

References.propTypes = {
  referencesLabel: PropTypes.string,
  references: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
}

export default References
