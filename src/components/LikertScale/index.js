import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'
import Radio from '@healthwise/radio'

class LikertScale extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.getAxisId = this.getAxisId.bind(this)
    this.axisButtonColors = []
    this.axisBgColors = []
    this.axisTextColors = []
    this.classNameBase = 'hw_likert_axis_button_'

    // set up component state so we can retain the selected value (even if the change doesn't trigger a rerender)
    this.state = { currentValue: this.props.selectedAnswer }

    this.initStyle()
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const currentVal = parseInt(this.props.selectedAnswer, 10)
    const newVal = parseInt(nextProps.selectedAnswer, 10)

    if (currentVal !== newVal) {
      this.setState({ currentValue: newVal })
    }
  }

  initStyle() {
    const props = this.props
    const total = props.maxValue - props.minValue + 1
    const increment = 1 / total

    for (let num = 0; num < total; num++) {
      const alpha = increment * num + increment

      this.axisButtonColors[num] = styles[this.classNameBase + num]
      this.axisBgColors[num] = {
        backgroundColor: 'rgba(' + this.props.baseRgbColor + ', ' + alpha + ')',
      }
      this.axisTextColors[num] = { color: this.getTextColor(alpha) }
    }
  }

  getTextColor(alpha) {
    const rgbaToRgb = function(colors, alpha) {
      return colors.map(function(color) {
        return (1 - alpha) * 255 + alpha * color
      })
    }
    // adapted from http://stackoverflow.com/a/3943023
    const getLuminance = function(colors) {
      colors = colors.map(function(c) {
        c = c / 255
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
      })
      return 0.2126 * colors[0] + 0.7152 * colors[1] + 0.0722 * colors[2]
    }

    let bg = this.props.baseRgbColor.split(',')
    let darkText = this.props.darkTextRgbColor.split(',')
    let lightText = this.props.lightTextRgbColor.split(',')
    let toReturn = this.props.darkTextRgbColor

    // compare the bg luminance to the dark and light text and pick the best color based on that
    if (
      bg &&
      darkText &&
      lightText &&
      bg.length === 3 &&
      darkText.length === 3 &&
      lightText.length === 3
    ) {
      const bgColor = rgbaToRgb(bg, alpha)
      const bgLuminance = getLuminance(bgColor)
      const darkLuminance = getLuminance(darkText)
      const lightLuminance = getLuminance(lightText)

      // TODO (enhancement): we could determine if their contrast ratio is high enough, and if it's not, just send black/white text
      toReturn =
        (bgLuminance + 0.05) / (darkLuminance + 0.05) >
        (lightLuminance + 0.05) / (bgLuminance + 0.05)
          ? this.props.darkTextRgbColor
          : this.props.lightTextRgbColor
    }

    return 'rgb(' + toReturn + ')'
  }

  handleChange(e) {
    const el = e.currentTarget

    if (!this.props.readonly) {
      if (el) {
        const selectedValue = parseInt(el.getAttribute('data-hw-value'), 10)

        // record the value locally
        this.setState({ currentValue: selectedValue })

        // run callback with selected value
        this.props.onAnswer(e, selectedValue, this.props.answerId)
      }
    } else {
      e.preventDefault()
      e.stopPropagation()
    }
  }

  getAxisId(num) {
    return this.props.id + '_key_' + num
  }

  render() {
    const selectedAnswer = parseInt(this.state.currentValue, 10)
    let {
      id,
      scaleWrapperId,
      name,
      isRequired,
      minValue,
      maxValue,
      minValueText,
      maxValueText,
      readonly,
      forPrint,
    } = this.props

    name = name || id
    scaleWrapperId = scaleWrapperId || id + '_scale_wrapper'

    let labels = []
    let disabledLabel = readonly ? styles.likert_axis_label_disabled + ' ' : ''
    let printLabel = forPrint ? styles.likert_for_print + ' ' : ''
    let width = 100 / (maxValue - minValue + 1) + '%'
    let widthObj = { width: width }

    for (let i = 0, num = minValue; num <= maxValue; i++, num++) {
      let axisId = this.getAxisId(num)
      let classNames = disabledLabel + printLabel + styles.likert_axis_label
      let radio = null
      let textColorObj = this.axisTextColors[this.axisTextColors.length - 1]
      let bgColorObj = { backgroundColor: 'rgba(' + this.props.baseRgbColor + ', 1)' }

      const defaultRadio = (
        <Radio
          forPrint={forPrint}
          onChange={this.handleChange}
          name={name}
          id={axisId}
          data-hw-width={num}
          data-hw-value={num}
          defaultChecked={selectedAnswer === num}
          value={'hw-likert-button_val_' + num}
          isRequired={isRequired}
        />
      )

      if (!readonly) {
        textColorObj = this.axisTextColors[i]
        bgColorObj = this.axisBgColors[i]

        radio = defaultRadio
      }

      if (forPrint) {
        radio = defaultRadio
      }

      if (!isNaN(selectedAnswer) && num <= selectedAnswer) {
        // color all the squares to the left of and including the selected answer
        classNames += ` ${this.axisButtonColors[i]} ${styles.likert_axis_button_active}`
      } else {
        bgColorObj = {}
        textColorObj = { color: 'rgb(' + this.props.darkTextRgbColor + ')' }
      }

      var blockStyles = Object.assign(bgColorObj, widthObj)

      labels.push(
        <div className={classNames} id={axisId + '_label'} key={axisId} style={blockStyles}>
          <label htmlFor={axisId}>
            <span className={styles.likert_axis_label_num} style={textColorObj}>
              {num}
            </span>
            {radio}
          </label>
        </div>
      )
    }

    const parentClasses =
      'hw-likert-scale ' + styles.likert_scale + (readonly ? ' ' + styles.likert_readonly : '')
    const textValueEquivalent = readonly ? (
      <span className={styles.common_hidden_text}>{`${selectedAnswer || 0} of ${maxValue}`}</span>
    ) : null

    return (
      <div
        className={parentClasses}
        id={id}
        data-hw-likert-min={minValue}
        data-hw-likert-max={maxValue}
      >
        <div className={'hw-likert-labels ' + styles.likert_labels}>
          <span
            className={
              'hw-likert-label hw-likert-label-left ' +
              styles.likert_label +
              ' ' +
              styles.likert_label_left
            }
            aria-hidden="true"
          >
            <span className={styles.likert_label_left_span}>{minValueText}</span>
          </span>
          <span
            className={
              'hw-likert-label hw-likert-label-right ' +
              styles.likert_label +
              ' ' +
              styles.likert_label_right
            }
            aria-hidden="true"
          >
            <span className={styles.likert_label_right_span}>{maxValueText}</span>
          </span>
        </div>
        <div
          id={scaleWrapperId}
          className={'hw-likert-scale-wrapper ' + styles.likert_scale_wrapper}
        >
          <div className={'hw-likert-axis ' + styles.likert_axis} aria-hidden={readonly}>
            {labels}
          </div>
          {textValueEquivalent}
        </div>
      </div>
    )
  }
}

LikertScale.propTypes = {
  id: PropTypes.string.isRequired,
  answerId: PropTypes.string,
  isRequired: PropTypes.bool,
  selectedAnswer: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minValueText: PropTypes.string,
  maxValueText: PropTypes.string,
  name: PropTypes.string,
  scaleWrapperId: PropTypes.string,
  baseRgbColor: PropTypes.string,
  darkTextRgbColor: PropTypes.string,
  lightTextRgbColor: PropTypes.string,
  readonly: PropTypes.bool,
  forPrint: PropTypes.bool,
  onAnswer: PropTypes.func,
}

LikertScale.defaultProps = {
  isRequired: false,
  minValue: 0,
  maxValue: 10,
  minValueText: 'Not at all important',
  maxValueText: 'Extremely important',
  baseRgbColor: '1, 122, 203',
  darkTextRgbColor: '54, 57, 66',
  lightTextRgbColor: '255, 255, 255',
  readonly: false,
  forPrint: false,
  onAnswer: function() {},
}

export default LikertScale
