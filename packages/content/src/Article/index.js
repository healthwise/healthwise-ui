import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle } from 'styled-components'

import Insights from '../Insights'

const GlobalStyle = createGlobalStyle`
  .hw-article-style .HwImageWrapper {
    display: inline;
    float: right;
    padding: 0 0 1em 1em;
  }
  .hw-article-style li .HwCmd {
    display: inline;
    font-weight: bold;
  }
  .hw-article-style li .HwInfo {
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
        <div className="hw-article-style">
          <GlobalStyle />
          {sections.map(function(item, i) {
            return <div key={i} dangerouslySetInnerHTML={{ __html: item.html }} />
          })}
        </div>
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
