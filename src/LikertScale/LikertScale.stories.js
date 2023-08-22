import { action } from '@storybook/addon-actions'

import LikertScale from './index'

export default {
  title: 'Components/Likert Scale',
  component: LikertScale,
}

export const WithDefaults = {
  render: () => (
    <div
      style={{
        padding: '20px',
      }}
    >
      <LikertScale id="1" />
    </div>
  ),

  name: 'with defaults',
}

export const SelectedAnswerCustomLabels = {
  render: () => (
    <div
      style={{
        padding: '20px',
      }}
    >
      <LikertScale id="1" selectedAnswer="6" minValueText="Meh." maxValueText="OH YEAH!" />
    </div>
  ),

  name: 'selected answer & custom labels',
}

export const WithReadonly = {
  render: () => (
    <div
      style={{
        padding: '20px',
      }}
    >
      <LikertScale id="1" selectedAnswer="8" readonly />
    </div>
  ),

  name: 'with readonly',
}

export const WithRange = {
  render: () => (
    <div
      style={{
        padding: '20px',
      }}
    >
      <LikertScale id="1" minValue="1" maxValue="5" selectedAnswer="2" />
    </div>
  ),

  name: 'with range',
}

export const WithCustomColors = {
  render: () => (
    <div
      style={{
        padding: '20px',
      }}
    >
      <LikertScale
        id="1"
        baseRgbColor="150, 50, 53"
        darkTextRgbColor="100, 1, 1"
        lightTextRgbColor="230, 230, 230"
        selectedAnswer="10"
      />
    </div>
  ),

  name: 'with custom colors',
}
