import { storiesOf } from '@storybook/react'
import { Scenarios } from './References.scenarios'

const refStories = storiesOf('Components/References', module)
for (const scenario of Scenarios) {
  refStories.add(scenario.title, () => {
    return scenario.element
  }, {
    info: scenario.description
  })
}
