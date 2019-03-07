import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ErrorLabel = styled.label`
  display: none;
`

const ValidationBox = styled.span`
  box-sizing: border-box;
  display: inline-block;
  font-size: 1em;
  font-weight: 500;
  position: relative;
  border: 1px solid #fbcfcd;
  color: #b20b04;
  background-color: #fde7e6;
  padding: 7px;
  width: auto;
`

const ValidationText = styled.span`
  display: inline-block;
  padding-left: 23px;
`

const ValidationGlyph = styled.span`
  display: block;
  position: absolute;
  height: 16px;
  width: 16px;
  top: 8px;
`

class ValidationError extends React.Component {
  render() {
    let { children, forId, ...otherAttributes } = this.props

    return (
      <ErrorLabel role="alert" aria-atomic="true" htmlFor={forId} className={'hw-validation-label'}>
        <ValidationBox className={'hw-validation-box'} {...otherAttributes}>
          <ValidationGlyph className={'hw-validation-glyph'}>
            <svg
              role="presentation"
              focusable="false"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  fill="#950803"
                  strokeWidth="0"
                  d="m15.34324,12.81328l-4.8294,-4.82941l4.82853,-4.82941l-2.48229,-2.48405l-4.8294,4.82941l-4.8294,-4.82941l-2.48229,2.48405l4.82853,4.82941l-4.8294,4.82941l2.48405,2.48317l4.82853,-4.82941l4.82853,4.82941"
                  id="svg_1"
                  className="x_glyph"
                  stroke="#000"
                />
              </g>
            </svg>
          </ValidationGlyph>
          <ValidationText className={'hw-validation-text'}>{children}</ValidationText>
        </ValidationBox>
      </ErrorLabel>
    )
  }
}

ValidationError.propTypes = {
  children: PropTypes.node.isRequired,
  forId: PropTypes.string,
}

export default ValidationError
