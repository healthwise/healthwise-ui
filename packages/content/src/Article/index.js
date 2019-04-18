import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Insights from '../Insights'

const Div = styled.div`
  &:global(.HwImageWrapper) {
    display: inline;
    float: right;
    padding: 0 0 1em 1em;
  }
  & li :global(.HwCmd) {
    display: inline;
    font-weight: bold;
  }
  & li :global(.HwInfo) {
    padding-left: 30px;
  }
`

class Article extends Component {
  constructor(props) {
    super(props)

    this.insights = new Insights()
    this.state = { sections: props.productMap && props.productMap.topics }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.productMap !== this.props.productMap) {
      this.setState({ sections: nextProps.productMap.topics })
    }
  }

  render() {
    const sections = this.state.sections

    if (sections && sections.length) {
      return (
        <Div>
          {sections.map(function(item, i) {
            return <div key={i} dangerouslySetInnerHTML={{ __html: item.html }} />
          })}
        </Div>
      )
    }
  }
}

Article.propTypes = {
  productMap: PropTypes.shape({
    topics: PropTypes.array,
  }),
}

export default Article
