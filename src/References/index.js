import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'

const Root = styled.fieldset`
  border: none;
  margin: 2rem 0;
  padding: 0;
  font-size: 0.8rem;
`

const Legend = styled.legend`
  border: none;
  margin: 0;
  padding: 0;
  line-height: normal;
  font-weight: 600;
`

const OrderedList = styled.ol`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const ListItem = styled.li`
  margin: 1rem 0;
`

class References extends Component {
  render() {
    const { references, referencesLabel, ...otherProps } = this.props

    return (
      <Root {...otherProps}>
        <Legend>{referencesLabel}</Legend>
        <OrderedList>
          {references.map(reference => (
            <ListItem key={reference.id}>{reference.title}</ListItem>
          ))}
        </OrderedList>
      </Root>
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

export default withTheme(References)
