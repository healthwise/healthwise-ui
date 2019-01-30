import React from 'react'
import { storiesOf } from '@storybook/react'
import LikertScale from './index'

storiesOf('Components/Likert Scale', module)
  .add(
    'with defaults',
    () => <LikertScale id="1" />,
    {
      info: `
        Demonstates basic rendering with defaults
      `
    }
  )
  .add(
    'with selected answer & custom labels',
    () => <LikertScale id="1" selectedAnswer="6" minValueText="Meh." maxValueText="OH YEAH!" />,
    {
      info: `
        Demonstates rendering with preselected answer & custom labels
      `
    }
  )
  .add(
    'with readonly',
    () => <LikertScale id="1" selectedAnswer="8" readonly />,
    {
      info: `
        Demonstates preselected answer in readonly mode
      `
    }
  )
  .add(
    'with range',
    () => <LikertScale id="1" minValue="1" maxValue="5" selectedAnswer="2" />,
    {
      info: `
        Demonstates custom range and preselected answer
      `
    }
  )
  .add(
    'with custom colors',
    () => (
      <LikertScale
        id="1"
        baseRgbColor="150, 50, 53"
        darkTextRgbColor="100, 1, 1"
        lightTextRgbColor="230, 230, 230"
        selectedAnswer="10"
      />
    ),
    {
      info: `
        Demonstates custom color and preselected answer
      `
    }
  )
