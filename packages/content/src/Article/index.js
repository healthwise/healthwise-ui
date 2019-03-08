import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './Article.css'

import Insights from '../Insights'

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
        <div className={styles.article}>
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
