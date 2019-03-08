import React from 'react'
import Icon from '../Icon'
import { PathContrast, PathPrimaryStroke } from '../IconFormatting'

import { defaultTheme } from '../../Theme'

const BrandingIcon = props => {
  return (
    <Icon viewBox="0 0 96 96" {...props}>
      <PathPrimaryStroke
        as="rect"
        x="2.64"
        y="7.36"
        width="90.67"
        height="59"
        rx="2.88"
        ry="2.88"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        theme={props.theme}
      />
      <PathContrast
        d="M31.06 25.81l8.31 9.9 12.37-20.15 22.09 38-60.04.06 17.27-27.81z"
        theme={props.theme}
      />
      <PathPrimaryStroke
        as="rect"
        x="28.4"
        y="84.69"
        width="39.68"
        height="5.83"
        rx="2.57"
        ry="2.57"
        fill="none"
        strokeWidth="1.5"
        theme={props.theme}
      />
      <PathPrimaryStroke
        d="M28.72 85.94l7.83-19.7m23.34 0l7.75 19.54"
        strokeMiterlimit="10"
        fill="none"
        strokeWidth="1.5"
        theme={props.theme}
      />
      <PathPrimaryStroke
        d="M37.73 29.31l8.3 9.9 12.38-20.15 22.09 38-60.04.06 17.27-27.81z"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        theme={props.theme}
      />
    </Icon>
  )
}

BrandingIcon.defaultProps = {
  theme: defaultTheme,
}

export default BrandingIcon
