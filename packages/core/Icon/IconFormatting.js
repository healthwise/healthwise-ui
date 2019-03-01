import styled from 'styled-components'

const PathContrast = styled.path`
  fill: ${props => props.theme.colorPrimaryLight};
`

const PathPrimary = styled.path`
  fill: ${props => props.theme.colorTextPrimary};
`

const PathPrimaryStroke = styled.path`
  stroke: ${props => props.theme.colorTextPrimary};
`

const PathContrastStroke = styled.path`
  stroke: ${props => props.theme.colorPrimaryLight};
`

export { PathContrast, PathPrimary, PathPrimaryStroke, PathContrastStroke }
