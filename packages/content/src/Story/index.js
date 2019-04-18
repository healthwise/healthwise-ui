import React from 'react'
import PropTypes from 'prop-types'
import { withTheme, createGlobalStyle } from 'styled-components'

import { defaultTheme } from '@healthwise-ui/core/Theme'

const GlobalStyle = createGlobalStyle`
  .HwImageWrapper {
    float: right;
    margin: 0 0 0 20px;
    background: ${props => props.theme.colorBackgroundContrastLight};
    padding: 10px 10px 30px;
    line-height: 1;
  }

  .HwImageWrapper img {
    border: 3px solid ${props => props.theme.colorBorder};
  }

  .HwNote {
    float: right;
    clear: both;
    margin-bottom: 20px;
    font-style: italic;
    padding-right: 10px;
    margin-top: -30px;
    color: ${props => props.theme.colorTextPrimary};
  }

  .HwNote ~ .HwNote {
    display: none;
  }

`

class Story extends React.Component {
  render() {
    let { data, ...otherProps } = this.props

    return (
      <div
        className="hw-content-story"
        dangerouslySetInnerHTML={{ __html: data.html }}
        {...otherProps}
      >
        <GlobalStyle theme={this.props.theme} />
      </div>
    )
  }
}

Story.propTypes = {
  data: PropTypes.shape({
    html: PropTypes.string,
  }),
}

Story.defaultProps = {
  theme: defaultTheme,
}

export default withTheme(Story)
