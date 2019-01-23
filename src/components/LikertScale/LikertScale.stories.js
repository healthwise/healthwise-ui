import React from 'react'
import { storiesOf } from '@storybook/react'
import LikertScale from './index'

storiesOf('Components/Likert Scale', module)
  .addWithInfo(
    'with defaults',
    `
      Demonstates basic rendering with defaults
    `,
    () => <LikertScale id="1" />
  )
  .addWithInfo(
    'with selected answer & custom labels',
    `
      Demonstates rendering with preselected answer & custom labels
    `,
    () => <LikertScale id="1" selectedAnswer="6" minValueText="Meh." maxValueText="OH YEAH!" />
  )
  .addWithInfo(
    'with readonly',
    `
      Demonstates preselected answer in readonly mode
    `,
    () => <LikertScale id="1" selectedAnswer="8" readonly />
  )
  .addWithInfo(
    'with range',
    `
      Demonstates custom range and preselected answer
    `,
    () => <LikertScale id="1" minValue="1" maxValue="5" selectedAnswer="2" />
  )
  .addWithInfo(
    'with custom colors',
    `
      Demonstates custom color and preselected answer
    `,
    () => (
      <LikertScale
        id="1"
        baseRgbColor="150, 50, 53"
        darkTextRgbColor="100, 1, 1"
        lightTextRgbColor="230, 230, 230"
        selectedAnswer="10"
      />
    )
  )
