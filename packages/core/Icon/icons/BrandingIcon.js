import React from 'react'
import Icon from '../Icon'
import styles from '../Icon.css'

const BrandingIcon = props => {
  return (
    <Icon viewBox="0 0 96 96" {...props}>
      <rect
        className={styles.color_primary_stroke}
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
      />
      <path
        className={styles.color_contrast}
        d="M31.06 25.81l8.31 9.9 12.37-20.15 22.09 38-60.04.06 17.27-27.81z"
      />
      <rect
        className={styles.color_primary_stroke}
        x="28.4"
        y="84.69"
        width="39.68"
        height="5.83"
        rx="2.57"
        ry="2.57"
        fill="none"
        strokeWidth="1.5"
      />
      <path
        className={styles.color_primary_stroke}
        d="M28.72 85.94l7.83-19.7m23.34 0l7.75 19.54"
        strokeMiterlimit="10"
        fill="none"
        strokeWidth="1.5"
      />
      <path
        className={styles.color_primary_stroke}
        d="M37.73 29.31l8.3 9.9 12.38-20.15 22.09 38-60.04.06 17.27-27.81z"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  )
}

export default BrandingIcon
