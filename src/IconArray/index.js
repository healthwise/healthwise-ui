import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'

import { defaultTheme } from '../Theme'

const IconOffPath = styled.path`
  stroke: ${props => props.theme.colorNeutralLight};
  fill: ${props => props.theme.colorNeutralLight};
`

const IconOnPath = styled.path`
  stroke: ${props => props.theme.colorPrimaryDark};
  fill: ${props => props.theme.colorPrimaryDark};
`

const IconRangePath = styled.path`
  stroke: ${props => props.theme.colorPrimary};
  fill: ${props => props.theme.colorPrimary};
`

const IconRowBreakCountSpan = styled.span`
  box-sizing: border-box;
  position: absolute;
  display: block;
  right: 0;
  transform: translate(90%, -50%);
`

const IconRowBreakCountSvg = styled.svg`
  max-height: 16px;
  max-width: 100%;
`

const IconSpan = styled.span`
  box-sizing: border-box;
  display: inline-block;
  width: 10%;

  /* Thank you, IE, and the horse you rode in on */
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    padding-bottom: 5%;    
    width: 10%;
    height: auto;
    max-height: 48.27px;
    overflow: visible;
    display: block;
  }
`

const RowBreakDiv = styled.div`
  box-sizing: border-box;
  width: 95%;
  border-top: solid 1px ${props => props.theme.colorBorder};
  position: relative;
`

const IconSvg = styled.svg`
  width: 100%;
`

const RowIconDiv = styled.div`
  box-sizing: border-box;
  width: 95%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`

const IconArrayDiv = styled.div`
  box-sizing: border-box;
  padding: 15px 0;
  max-width: 100%;
`

function IconWrapper(props) {
  return (
    <IconSpan className={`hw-array-${props.iconStyle}`} key={props.id}>
      <IconSvg
        role="presentation"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 80"
        preserveAspectRatio="xMidYMin slice"
        focusable="false"
      >
        {props.children}
      </IconSvg>
    </IconSpan>
  )
}

IconWrapper.propTypes = {
  iconStyle: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
}

IconWrapper.defaultProps = {
  iconStyle: 'icon_off',
  theme: defaultTheme,
}

class IconArray extends Component {
  getCountMarker(keyBase, count = 0) {
    return (
      <IconRowBreakCountSpan
        className={'hw-icon-break-row-count'}
        key={`count-marker-${keyBase}-${count}`}
      >
        <IconRowBreakCountSvg
          role="presentation"
          width="42"
          height="26"
          viewBox="0 0 42 26"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
        >
          <g>
            <text
              transform="matrix(1.6493341922760008,0,0,1.6493341922760008,-0.23193762078881264,-0.11160431429743767) "
              stroke="null"
              y="12.49819"
              x="0.55858"
              fontFamily="Helvetica, Arial, sans-serif"
              fontSize="12"
            >
              {count}
            </text>
          </g>
        </IconRowBreakCountSvg>
      </IconRowBreakCountSpan>
    )
  }

  getSvgPart(style, otherAttributes, as = 'path') {
    switch (style) {
      case 'icon_on':
        return <IconOnPath as={as} {...otherAttributes} theme={this.props.theme} />
      case 'icon_range':
        return <IconRangePath as={as} {...otherAttributes} theme={this.props.theme} />
      default:
        return <IconOffPath as={as} {...otherAttributes} theme={this.props.theme} />
    }
  }

  getNeutralIcon(key, iconStyle = 'icon_off') {
    return (
      <IconWrapper key={key} id={key} iconStyle={iconStyle} theme={this.props.theme}>
        <g>
          {this.getSvgPart(iconStyle, {
            strokeWidth: '3',
            d: 'm40.50356,32.83198l-15.50356,47.16802l-15.50356,-47.16802l31.00712,0z',
          })}
          {this.getSvgPart(
            iconStyle,
            {
              strokeWidth: '3',
              cy: '20.5',
              cx: '25',
              r: '9.0625',
            },
            'circle'
          )}
        </g>
      </IconWrapper>
    )
  }

  getFemaleIcon(key, iconStyle = 'icon_off') {
    return (
      <IconWrapper key={key} id={key} iconStyle={iconStyle} theme={this.props.theme}>
        <g>
          {this.getSvgPart(
            iconStyle,
            {
              strokeWidth: '1',
              cy: '15.99642',
              cx: '25',
              r: '7.49054',
            },
            'circle'
          )}
          {this.getSvgPart(iconStyle, {
            d:
              'm24.9478,22.25514c3.53531,0 6.40466,-2.46273 6.40466,-5.50086c0,-3.03984 -2.86934,-5.50428 -6.40466,-5.50428c-3.5383,0 -6.40863,2.46444 -6.40863,5.50428c0,3.03813 2.86934,5.50086 6.40863,5.50086zm17.96242,23.72371l-5.74762,-18.30894c-0.0536,-0.16623 -0.12903,-0.32478 -0.22033,-0.47141c-0.65308,-1.71513 -2.52792,-2.95715 -4.74221,-2.95715l-14.54719,0c-2.30858,0 -4.24696,1.34858 -4.81764,3.17879c-0.03871,0.08013 -0.07047,0.16452 -0.09925,0.25147l-5.64539,18.30809c-0.37617,1.20025 0.45357,2.43374 1.853,2.75683c1.39746,0.32137 2.83362,-0.39128 3.20979,-1.59152l4.43353,-14.3817l1.84706,0l-8.04627,26.02106l7.58179,0l0,17.96455c0,1.38182 1.30217,2.50109 2.91301,2.50109c1.60687,0 2.91202,-1.11842 2.91202,-2.50109l0,-17.96455l2.31652,0l0,17.96455c0,1.38182 1.30415,2.50109 2.915,2.50109c1.60687,0 2.91202,-1.11842 2.91202,-2.50109l0,-17.96455l7.5778,0l-8.07604,-26.02106l1.89569,0l4.51491,14.3817c0.37616,1.20025 1.81233,1.91289 3.20977,1.59152c1.39448,-0.32308 2.22421,-1.55743 1.85004,-2.75768l0,0z',
            fillOpacity: 'null',
            strokeOpacity: 'null',
            strokeWidth: '1',
            stroke: 'null',
            fill: 'null',
          })}
        </g>
      </IconWrapper>
    )
  }

  getMaleIcon(key, iconStyle = 'icon_off') {
    return (
      <IconWrapper key={key} id={key} iconStyle={iconStyle} theme={this.props.theme}>
        <g>
          {this.getSvgPart(iconStyle, {
            strokeWidth: '1.53',
            d:
              'm43.48424,33.63831l0,-2.74599c0,-2.88918 -3.36696,-5.23169 -7.52503,-5.23169l-21.92206,0c-4.15567,0 -7.52503,2.34251 -7.52503,5.23169l0,2.74599c-0.00727,0.06233 -0.01212,0.12635 -0.01212,0.1912l0,15.81639c0,1.22895 1.43208,2.22458 3.19975,2.22458c1.76525,0 3.20095,-0.99563 3.20095,-2.22458l0,-15.58222l2.14568,0l0,17.80848l0.01575,0l0,25.16285c0,1.6358 1.91065,2.96499 4.26592,2.96499c2.35649,0 4.26592,-1.3275 4.26592,-2.96499l0,-25.16285l2.81447,0l0,25.16285c0,1.6358 1.91183,2.96499 4.26592,2.96499c2.35648,0 4.26591,-1.3275 4.26591,-2.96499l0,-25.16285l0.01333,0l0,-17.80848l2.14568,0l0,15.58137c0,1.22896 1.4357,2.22543 3.20096,2.22543c1.76769,0 3.19975,-0.99647 3.19975,-2.22543l0,-15.81638c-0.0012,-0.0657 -0.0085,-0.12804 -0.01575,-0.19037l0,0l0,0.00001z',
          })}
          {this.getSvgPart(
            iconStyle,
            {
              strokeWidth: '1.5',
              cy: '15.99642',
              cx: '25',
              r: '7.49054',
            },
            'circle'
          )}
        </g>
      </IconWrapper>
    )
  }

  getRowBreak(keyBase, count) {
    return (
      <RowBreakDiv key={`row-break-${keyBase}-${count}`}>
        {this.getCountMarker(keyBase, count)}
      </RowBreakDiv>
    )
  }

  getIconRow(keyBase, icons, count) {
    return <RowIconDiv key={`row-${keyBase}-${count}`}>{icons}</RowIconDiv>
  }

  render() {
    const getIconFactory = {
      neutral: (key, style) => this.getNeutralIcon(key, style),
      female: (key, style) => this.getFemaleIcon(key, style),
      male: (key, style) => this.getMaleIcon(key, style),
    }

    const iconStyles = {
      on: 'icon_on',
      off: 'icon_off',
      midRange: 'icon_range',
    }

    let { minRange, maxRange, total, iconType, forceBreakOn } = this.props
    minRange = parseInt(minRange, 10)
    maxRange = parseInt(maxRange, 10) || 0
    total = parseInt(total, 10)

    const getIcon = getIconFactory[iconType]

    const keyBase = `icon-array-key-${Math.ceil(Math.random() * 99999999)}`
    const rows = [this.getRowBreak(keyBase, 0)]
    let icons = []
    for (let count = 1; count <= total; count++) {
      let iconStyle = iconStyles.off
      if (count <= minRange) {
        iconStyle = iconStyles.on
      } else if (count <= maxRange) {
        iconStyle = iconStyles.midRange
      }

      icons.push(getIcon(`${keyBase}-${count}`, iconStyle))

      if (count % forceBreakOn === 0) {
        rows.unshift(this.getIconRow(keyBase, icons, count))
        rows.unshift(this.getRowBreak(keyBase, count))
        icons = []
      }
    }

    if (icons.length !== 0) {
      rows.unshift(this.getIconRow(keyBase, icons, total))
      rows.unshift(this.getRowBreak(keyBase, total))
    }

    return <IconArrayDiv aria-hidden>{rows}</IconArrayDiv>
  }
}

IconArray.propTypes = {
  minRange: PropTypes.string,
  maxRange: PropTypes.string,
  total: PropTypes.string,
  iconType: PropTypes.oneOf(['male', 'female', 'neutral']),
  forceBreakOn: PropTypes.number,
  theme: PropTypes.shape({
    colorNeutralLight: PropTypes.string,
    colorPrimaryDark: PropTypes.string,
    colorPrimary: PropTypes.string,
    colorBorder: PropTypes.string,
  }),
}

IconArray.defaultProps = {
  minRange: '0',
  total: '100',
  iconType: 'neutral',
  forceBreakOn: 10,
  theme: defaultTheme,
}

export default withTheme(IconArray)
