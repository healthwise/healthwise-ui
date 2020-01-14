import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'

import { defaultTheme } from '../Theme'
import { getKey } from '../KeyGen'

const Label = styled.label`
  margin-bottom: 0.25em;
  font-size: 0.75em;
  letter-spacing: 0.5px;

  &[aria-disabled='true'] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const Wrapper = styled.div`
  box-sizing: border-box;
  display: block;
  width: 100%;
  margin-bottom: 10px;
`

const TextArea = styled.textarea`
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 0.5em;
  margin: 0;
  border: 1px solid ${props => props.theme.colorBorder};
  min-height: 88px;
  font-size: 1em;
  line-height: 1.5em;
  resize: vertical;

  &[aria-disabled='true'] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus {
    outline: ${props => props.theme.focusIndicator};
    outline-offset: ${props => props.theme.focusIndicatorOffset};
  }
`

const ReadOnly = styled(TextArea)`
  border: 0;
  padding: 0;
  min-height: 0;
`

const Counter = styled.div`
  font-size: 0.75em;
  letter-spacing: 0.5px;
  line-height: 1.7;
`

class Textarea extends React.Component {
  constructor(props) {
    super(props)

    this.counterId = getKey()

    this.onFocus = this.onFocus.bind(this)
    this.onBlur = this.onBlur.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onFocus(e) {
    this.props.onFocus(e)
  }

  onBlur(e) {
    this.props.onBlur(e)
  }

  onKeyDown(e) {
    if (
      this.props.maxCharacters !== null &&
      e.target.value.length >= parseInt(this.props.maxCharacters, 10) &&
      // don't block the delete key
      e.keyCode !== 8
    ) {
      e.preventDefault()
      e.stopPropagation()
    }

    this.props.onKeyDown(e)
  }

  onChange(e) {
    if (this.charCountElement) {
      this.charCountElement.innerHTML = this.getMaxCharLabel(
        this.props.maxCharacters,
        this.props.readonly,
        e.target.value.length
      )
    }

    this.props.onChange(e)
  }

  getMaxCharLabel(maxChars, readonly = false, numChars = 0) {
    const label = `${maxChars} character limit`
    return readonly ? label : `${label} (${numChars} used)`
  }

  render() {
    let {
      id,
      name,
      defaultValue,
      value,
      label,
      disabled,
      maxCharacters,
      readonly,
      theme,
    } = this.props

    let characterCounter = ''
    let title = label ? (
      <Label htmlFor={id} className={'hw-textarea-label'} aria-disabled={disabled}>
        {label}
      </Label>
    ) : null

    if (maxCharacters) {
      value = value && value.length ? value.substring(0, maxCharacters) : null

      characterCounter = (
        <Counter
          id={this.counterId}
          ref={el => {
            this.charCountElement = el
          }}
          className={'hw-textarea-counter'}
        >
          {this.getMaxCharLabel(maxCharacters, readonly)}
        </Counter>
      )
    }

    // if it's readonly, just display the text
    const textarea = readonly ? (
      <ReadOnly as="p" className={'hw-textarea-textarea hw-textarea-textarea-readonly'}>
        {value || defaultValue || ''}
      </ReadOnly>
    ) : (
      <Wrapper className={'hw-textarea-textarea-wrapper'}>
        <TextArea
          className={'hw-textarea-textarea'}
          id={id}
          name={name}
          defaultValue={defaultValue}
          value={value}
          disabled={disabled}
          aria-describedby={this.counterId}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onKeyDown={this.onKeyDown}
          onChange={this.onChange}
          theme={theme}
        />
        {characterCounter}
      </Wrapper>
    )

    return (
      <div className={'hw-textarea'} aria-disabled={disabled}>
        {title}
        {textarea}
      </div>
    )
  }
}

Textarea.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  maxCharacters: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  readonly: PropTypes.bool,
  theme: PropTypes.shape({
    colorBorder: PropTypes.string,
    focusIndicator: PropTypes.string,
    focusIndicatorOffset: PropTypes.string,
  }),
}

Textarea.defaultProps = {
  id: getKey(),
  defaultValue: null,
  value: null,
  readonly: false,
  disabled: false,
  maxCharacters: null,
  onFocus: function(e) {
    return e
  },
  onBlur: function(e) {
    return e
  },
  onKeyDown: function(e) {
    return e
  },
  onChange: function(e) {
    return e
  },
  theme: defaultTheme,
}

export default withTheme(Textarea)
