import React from 'react'
import Icon from '../Icon'
import styled from 'styled-components'

import { defaultTheme } from '../../Theme'

const PathContrast = styled.path`
  fill: ${props => props.theme.colorPrimaryLight};
`

const PathPrimary = styled.path`
  fill: ${props => props.theme.colorTextPrimary};
`

const PathPrimaryStroke = styled.path`
  stroke: ${props => props.theme.colorTextPrimary};
`

const AnalyticsIcon = props => {
  console.log(props.theme)
  return (
    <Icon viewBox="0 0 96 96" {...props}>
      <PathContrast
        d="M72.76 38.94h14.17v50.33H72.76zm-58.55 33.5h13.81v16.71H14.21zm19.68-13.49h14v30.33h-14zm19.44 5.45h13.94v24.88H53.33z"
        theme={props.theme}
      />
      <PathPrimary
        d="M9.83 81.71H2.42a.87.87 0 1 1 0-1.73h7.41a.87.87 0 1 1 0 1.73zm0-9.13H2.42a.87.87 0 1 1 0-1.73h7.41a.87.87 0 1 1 0 1.73zm0-9.13H2.42a.87.87 0 1 1 0-1.73h7.41a.87.87 0 1 1 0 1.73zm0-9.13H2.42a.87.87 0 1 1 0-1.73h7.41a.87.87 0 1 1 0 1.73zm0-9.13H2.42a.87.87 0 1 1 0-1.73h7.41a.87.87 0 1 1 0 1.73zm0-9.13H2.42a.87.87 0 1 1 0-1.73h7.41a.87.87 0 1 1 0 1.73zm0-9.13H2.42a.87.87 0 1 1 0-1.73h7.41a.87.87 0 1 1 0 1.73zm0-9.13H2.42a.87.87 0 1 1 0-1.73h7.41a.87.87 0 1 1 0 1.73zm0-9.13H2.42a.87.87 0 1 1 0-1.73h7.41a.87.87 0 1 1 0 1.73zm82.76 81.69H2.42a.84.84 0 1 1 0-1.67h90.17a.84.84 0 1 1 0 1.67zM23.55 57.28a1 1 0 0 1-.81-.42 1 1 0 0 1 .24-1.4l58.87-41.75A1 1 0 0 1 83 15.34L24.13 57.09a1 1 0 0 1-.58.19z"
        theme={props.theme}
      />
      <PathPrimary
        d="M83.51 23.28a1 1 0 0 1-1-1v-7.94h-8.92a1 1 0 0 1 0-2h9.91a1 1 0 0 1 1 1v8.93a1 1 0 0 1-1 1z"
        theme={props.theme}
      />
      <PathPrimaryStroke
        d="M76.71 35.44H90.3v50.5H76.71zM17.64 69.18h13.59v16.76H17.64zm19.69-13.66h13.59v30.43H37.33zm19.69 5.46h13.59v24.96H57.02z"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.72"
        theme={props.theme}
      />
    </Icon>
  )
}

AnalyticsIcon.defaultProps = {
  theme: defaultTheme
}

export default AnalyticsIcon
