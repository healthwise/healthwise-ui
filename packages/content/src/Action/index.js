import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Div = styled.div`
  display: block;
`

class Action extends React.Component {
  render() {
    let { data, ...otherProps } = this.props
    const outerClasses = 'hw-content-action'

    return (
      <Div
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
