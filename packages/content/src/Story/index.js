import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StoryDiv = styled.div`
  :global(.HwImageWrapper) {
    float: right;
    margin: 0 0 0 20px;
    background: var(--color-background-contrast-light);
    padding: 10px 10px 30px;
    line-height: 1;
  }

  :global(.HwImageWrapper) img {
    border: 3px solid var(--color-border);
  }

  :global(.HwNote) {
    float: right;
    clear: both;
    margin-bottom: 20px;
    font-style: italic;
    padding-right: 10px;
    margin-top: -30px;
    color: var(--color-text-primary);
  }

  :global(.HwNote) ~ :global(.HwNote) {
    display: none;
  }
`

class Story extends React.Component {
  render() {
    let { data, ...otherProps } = this.props

    return (
      <StoryDiv
        className="hw-content-story"
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
