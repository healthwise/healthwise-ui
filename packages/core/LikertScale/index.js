import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Radio from '../Radio'
import ScreenReaderOnly from '../ScreenReaderOnly'

const Root = styled.div`
  margin: 10px auto 2em;

  @media screen and (max-width: 750px) {
    margin-bottom: 1em;
  }

  .hw-radio-wrapper .hw-radio-image .hw-radio-focus-outline {
    @media screen and (-ms-high-contrast: active) {
      stroke: #000;
    }
    @media screen and (-ms-high-contrast: black-on-white) {
      stroke: #fff;
    }
  }
`

const LabelsContainer = styled.div`
  display: table;
  width: 100%;
  padding-bottom: 10px;
`

const ScaleLabel = styled.span`
  display: table-cell;
  width: 50%;
`

const LeftScaleLabel = styled(ScaleLabel)`
  text-align: left;
`

const RightScaleLabel = styled(ScaleLabel)`
  text-align: right;
`

const ScaleLabelText = styled.span`
  display: inline-block;
  width: 30%;
  color: #363942;
  font-weight: 500;
  line-height: 1em;
  font-size: 0.75em;

  @media screen and (max-width: 750px) {
    width: 35%;
  }
`

const ButtonDefault = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 9.09092%;
  height: ${props => props.readonly
    ? '74px'
    : props.forPrint
    ? '80px'
    : 'auto'
  };
  background: #fff;
  font-size: 1.25em;
  text-align: center;
  border: 2px solid #dde0e6;
  border-right: none;
  margin: 0;
  padding: 0;
  padding-top: ${props => props.readonly
    ? '27px'
    : props.forPrint
    ? '16px'
    : '0'
  };
  transition: all 0.5s ease-out;

  :first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  :last-child {
    border-right: 2px solid #dde0e6;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  @media screen and (max-width: 750px) {
    border-width: 1px;
    padding: 0;
    ${props => props.readonly ? `
      padding-top: 0;
      height: inherit;
      line-height: 2em;
    ` : ''}

    :first-child {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    :last-child {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }

  @media print {
    ${props => props.readonly ? `
      padding: 0.25em;
      border-color: #eee;
      height: auto;
      width: 9.09092%;
      font-weight: normal;
      color: #9e9e9e;
    ` : ''}
  }

  input[type="radio"] {
    display: block;
    margin: 15px auto 5px;
    padding: 4px 2px 2px 4px;
  }
`

const ButtonActive = styled(ButtonDefault)`
  @media print {
    ${props => props.readonly ? `
      font-weight: bold;
      border-color: rgba(1, 122, 203, 1);
      border-right: 2px solid rgba(1, 122, 203, 1);
      border-left-width: 0;
      background-color: #fff;
      color: #000;
    ` : ''}
  }

  @media screen and (-ms-high-contrast: active) {
    background-color: #fff;
    border-color: #fff;
    color: #000;
  }

  @media screen and (-ms-high-contrast: black-on-white) {
    background-color: #000;
    border-color: #000;
    color: #fff;
  }
`

const ButtonLabel = styled.label`
  display: block;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 6px;
  cursor: ${props => props.readonly ? 'default' : 'pointer'};
`

const ButtonLabelNumber = styled.span`
  display: block;
  padding: ${props => props.readonly ? '0' : '0.4em 0 0'};
`

class LikertScale extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.getAxisId = this.getAxisId.bind(this)
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
    let width = 100 / (maxValue - minValue + 1) + '%'
    let widthObj = { width: width }

    for (let i = 0, num = minValue; num <= maxValue; i++, num++) {
      let axisId = this.getAxisId(num)
      let Button = ButtonDefault
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
        Button = ButtonActive
      } else {
        bgColorObj = {}
        textColorObj = { color: 'rgb(' + this.props.darkTextRgbColor + ')' }
      }

      labels.push(
        <Button
          id={axisId + '_label'}
          key={axisId}
          style={{ ...bgColorObj, ...widthObj }}
          readonly={readonly}
          forPrint={forPrint}
        >
          <ButtonLabel htmlFor={axisId} readonly={readonly}>
            <ButtonLabelNumber style={textColorObj} readonly={readonly}>
              {num}
            </ButtonLabelNumber>
            {radio}
          </ButtonLabel>
        </Button>
      )
    }

    const textValueEquivalent = readonly ? (
      <ScreenReaderOnly>{`${selectedAnswer || 0} of ${maxValue}`}</ScreenReaderOnly>
    ) : null

    return (
      <Root
        className="hw-likert-scale"
        id={id}
        data-hw-likert-min={minValue}
        data-hw-likert-max={maxValue}
      >
        <LabelsContainer className="hw-likert-labels">
          <LeftScaleLabel
            className="hw-likert-label hw-likert-label-left"
            aria-hidden="true"
          >
            <ScaleLabelText>{minValueText}</ScaleLabelText>
          </LeftScaleLabel>
          <RightScaleLabel
            className="hw-likert-label hw-likert-label-right"
            aria-hidden="true"
          >
            <ScaleLabelText>{maxValueText}</ScaleLabelText>
          </RightScaleLabel>
        </LabelsContainer>
        <div
          id={scaleWrapperId}
          className="hw-likert-scale-wrapper"
        >
          <div className="hw-likert-axis" aria-hidden={readonly}>
            {labels}
          </div>
          {textValueEquivalent}
        </div>
      </Root>
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
