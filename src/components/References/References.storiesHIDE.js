import { storiesOf } from '@storybook/react'
import { Scenarios } from './References.scenarios'

const refStories = storiesOf('Components/References', module)
for (const scenario of Scenarios) {
  refStories.addWithInfo(scenario.title, scenario.description, () => {
    return scenario.element
  })
}
