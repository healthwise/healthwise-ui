/* global describe, it, expect */
import renderer from 'react-test-renderer'
import { Scenarios } from './References.scenarios'

describe(`<Referencess />`, () => {
  // Snapshot tests
  for (const scenario of Scenarios) {
    it(scenario.description, () => {
      const component = renderer.create(scenario.element).toJSON()
      expect(component).toMatchSnapshot()
    })
  }
})
