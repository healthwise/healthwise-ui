import * as steps from './DropDown.testSteps'

describe('DropDown', () => {
  it('renders correctly with minimum required props', () => {
    const items = steps.givenIHaveNoItems()
    steps.whenIRenderDropDown({ items })
    steps.thenICanVerifyNoLabelIsRendered()
    steps.thenICanVerifyNoItemsAreRendered()
    steps.thenICanVerifyDropDownIsNotRequired()
    steps.thenICanVerifyDropDownIsNotDisabled()
    steps.thenICanVerifyNoErrorIsRendered()
  })

  it('renders no items if no items are passed', () => {
    const items = steps.givenIHaveNoItems()
    steps.whenIRenderDropDown({ items })
    steps.thenICanVerifyNoItemsAreRendered()
  })

  it('renders correctly when not required', () => {
    const items = steps.givenIHaveNoItems()
    const required = false
    const label = 'Test Dropdown'
    const props = { required, items, label }

    steps.whenIRenderDropDown(props)
    steps.thenICanVerifyLabelIsRendered(label)
    steps.thenICanVerifyDropDownIsNotRequired()
  })

  it('renders correctly when required', () => {
    const items = steps.givenIHaveNoItems()
    const required = true
    const label = 'Test Dropdown'
    const props = { required, items, label }

    steps.whenIRenderDropDown(props)
    steps.thenICanVerifyRequiredLabelIsRendered(label)
    steps.thenICanVerifyDropDownIsRequired()
  })

  it('renders correctly when required without label', () => {
    const items = steps.givenIHaveNoItems()
    const required = true
    const props = { required, items }

    steps.whenIRenderDropDown(props)
    steps.thenICanVerifyNoLabelIsRendered()
    steps.thenICanVerifyDropDownIsRequired()
  })

  it('renders correctly when disabled', () => {
    const items = steps.givenIHaveNoItems()
    const disabled = true
    const props = { disabled, items }

    steps.whenIRenderDropDown(props)
    steps.thenICanVerifyDropDownIsDisabled()
  })

  it('renders correctly with error', () => {
    const items = steps.givenIHaveNoItems()
    const error = 'Test Error Message'
    const props = { error, items }

    steps.whenIRenderDropDown(props)
    steps.thenICanVerifyErrorIsRendered(error)
  })

  it('renders with prompt', () => {
    const items = steps.givenIHaveNoItems()
    const prompt = 'Test Prompt'
    const props = { prompt, items }

    steps.whenIRenderDropDown(props)
    steps.thenICanVerifyPromptIsRendered(prompt)
  })

  it('renders with items as strings', () => {
    const items = steps.givenIHaveItemsStrings(3)
    const props = { items }
    steps.whenIRenderDropDown(props)
    steps.thenICanVerifyItemsAreRendered(props)
  })

  it('renders with items as numbers', () => {
    const items = steps.givenIHaveItemsNumbers(3)
    const props = { items }
    steps.whenIRenderDropDown(props)
    steps.thenICanVerifyItemsAreRendered(props)
  })
  it('renders with items as objects', () => {
    const items = steps.givenIHaveItemsObjects(3)
    const props = { items }
    steps.whenIRenderDropDown(props)
    steps.thenICanVerifyItemsAreRendered(props)
  })

  it('renders with items as objects with custom name and value keys', () => {
    const items = steps.givenIHaveItemsObjects(3)
    const nameKey = 'customName'
    const valueKey = 'customValue'
    const props = { items, nameKey, valueKey }
    steps.whenIRenderDropDown(props)
    steps.thenICanVerifyItemsAreRendered(props)
  })

  it('renders items without grouping', () => {
    const items = steps.givenIHaveItemsObjects(3)
    const props = { items }
    steps.whenIRenderDropDown(props)
    steps.thenICanVerifyItemsAreRendered(props)
    steps.thenICanVerifyNoGroupsAreRendered()
  })

  it('renders items with grouping and multiple groups', () => {
    const items = steps.givenIHaveItemsObjects(3)
    const groupKey = 'grouping'
    const props = { items, groupKey }
    steps.whenIRenderDropDown(props)
    steps.thenICanVerifyItemsAreRendered(props)
    steps.thenICanVerifyGroupsAreRendered(props)
  })

  it('renders items with grouping and single groups', () => {
    const items = steps.givenIHaveItemsObjects(3)
    for (let i = 0; i < items.length; i++) {
      items[i].grouping = 'singleGroup'
    }
    const groupKey = 'grouping'
    const props = { items, groupKey }
    steps.whenIRenderDropDown(props)
    steps.thenICanVerifyItemsAreRendered(props)
    steps.thenICanVerifyNoGroupsAreRendered()
  })

  it('renders no items when grouped with no items passed', () => {
    const items = steps.givenIHaveItemsObjects(0)
    const groupKey = 'grouping'
    const props = { items, groupKey }
    steps.whenIRenderDropDown(props)
    steps.thenICanVerifyNoItemsAreRendered()
    steps.thenICanVerifyNoGroupsAreRendered()
  })
})
