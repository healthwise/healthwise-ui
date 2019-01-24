import React from 'react'
import PropTypes from 'prop-types'
import styles from './TextArea.css'
import { getKey } from '../KeyGen'

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
    // per specs: "Text box does not exceed 250 characters. If user types more characters than the limit, they will not appear in the text field."
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
    let { id, name, value, label, maxCharacters, readonly } = this.props

    let characterCounter = ''
    let title = label ? (
      <label htmlFor={id} className={'hw-textarea-label ' + styles.label}>
        {label}
      </label>
    ) : null

    if (maxCharacters) {
      // potentially destructive, but part of requirements (see comment above)
      value = value && value.length ? value.substring(0, maxCharacters) : null

      characterCounter = (
        <div
          id={this.counterId}
          ref={el => {
            this.charCountElement = el
          }}
          className={'hw-textarea-counter ' + styles.textarea_counter}
        >
          {this.getMaxCharLabel(maxCharacters, readonly)}
        </div>
      )
    }

    // if it's readonly, just display the text
    const textarea = readonly ? (
      <p className={'hw-textarea-textarea hw-textarea-textarea-readonly ' + styles.textarea}>
        {value}
      </p>
    ) : (
      <div className={'hw-textarea-textarea-wrapper ' + styles.textarea_wrapper}>
        <textarea
          className={'hw-textarea-textarea ' + styles.textarea}
          id={id}
          name={name}
          defaultValue={value}
          aria-describedby={this.counterId}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onKeyDown={this.onKeyDown}
          onChange={this.onChange}
        />
        {characterCounter}
      </div>
    )

    return (
      <div className={'hw-textarea'}>
        {title}
        {textarea}
      </div>
    )
  }
}

Textarea.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  maxCharacters: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  readonly: PropTypes.bool,
}

Textarea.defaultProps = {
  id: getKey(),
  readonly: false,
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
}

export default Textarea
