import React from 'react'
import { render, screen } from '@testing-library/react'
import DropDown from './index'

export const givenIHaveItemsStrings = number => {
  const items = []
  for (let i = 0; i < number; i++) {
    items[i] = `item${i}`
  }

  return items
}

export const givenIHaveItemsNumbers = number => {
  const items = []
  for (let i = 0; i < number; i++) {
    items[i] = i
  }

  return items
}

export const givenIHaveItemsObjects = number => {
  const items = []
  for (let i = 0; i < number; i++) {
    items[i] = {
      name: `name${i}`,
      value: `value${i}`,
      customName: `customName${i}`,
      customValue: `customValue${i}`,
      grouping: `grouping${i % 2 === 0 ? 'even' : 'odd'}`,
    }
  }

  return items
}

export const givenIHaveNoItems = () => {
  return []
}

export const whenIRenderDropDown = ({
  label,
  prompt,
  items,
  valueKey,
  nameKey,
  groupKey,
  required,
  disabled,
  error,
}) => {
  render(
    <DropDown
      label={label}
      prompt={prompt}
      items={items}
      valueKey={valueKey}
      nameKey={nameKey}
      groupKey={groupKey}
      required={required}
      disabled={disabled}
      error={error}
    />
  )
}

export const thenICanVerifyNoItemsAreRendered = () => {
  expect(screen.queryAllByRole('option')).toHaveLength(0)
}

export const thenICanVerifyDropDownIsRequired = () => {
  expect(screen.getByRole('combobox')).toBeRequired()
}

export const thenICanVerifyDropDownIsNotRequired = () => {
  expect(screen.getByRole('combobox')).not.toBeRequired()
}

export const thenICanVerifyDropDownIsDisabled = () => {
  expect(screen.getByRole('combobox')).toBeDisabled()
}

export const thenICanVerifyDropDownIsNotDisabled = () => {
  expect(screen.getByRole('combobox')).not.toBeDisabled()
}

export const thenICanVerifyErrorIsRendered = errorMessage => {
  expect(screen.getByTestId('error-message')).toBeInTheDocument()
  expect(screen.getByText(errorMessage)).toBeInTheDocument()
}

export const thenICanVerifyNoErrorIsRendered = () => {
  expect(screen.queryByTestId('error-message')).toBeNull()
}

export const thenICanVerifyLabelIsRendered = label => {
  expect(screen.getByTestId('label-message')).toBeInTheDocument()
  expect(screen.getByText(label)).toBeInTheDocument()
}

export const thenICanVerifyNoLabelIsRendered = () => {
  expect(screen.queryByTestId('label-message')).toBeNull()
}

export const thenICanVerifyRequiredLabelIsRendered = label => {
  expect(screen.getByText(`${label} *`)).toBeInTheDocument()
}

export const thenICanVerifyPromptIsRendered = prompt => {
  const options = screen.getAllByRole('option')
  expect(options).toHaveLength(1)
  expect(options[0]).toBeInTheDocument()
  expect(options[0]).toHaveTextContent(prompt)
  expect(options[0]).toHaveValue('')
}

export const thenICanVerifyItemsAreRendered = ({ prompt, items, nameKey, valueKey }) => {
  const options = screen.getAllByRole('option')
  const promptOption = prompt ? 1 : 0
  const expectedLength = items.length + promptOption
  expect(options).toHaveLength(expectedLength)

  items.forEach((item, i) => {
    const isObj = item instanceof Object
    const expectedName = `${isObj ? item[nameKey] ?? item.name : item}`
    const expectedValue = `${isObj ? item[valueKey] ?? item.value : item}`
    const itemOption = screen.getByRole('option', { name: expectedName })

    expect(itemOption).toBeInTheDocument()
    expect(itemOption).toHaveValue(expectedValue)
  })
}

export const thenICanVerifyNoGroupsAreRendered = () => {
  expect(screen.queryAllByTestId('optgroup')).toHaveLength(0)
}

export const thenICanVerifyGroupsAreRendered = ({ items, groupKey }) => {
  const groups = screen.getAllByTestId('optgroup')
  const foundGroups = []

  items.forEach(item => {
    if (!foundGroups.includes(item[groupKey])) {
      foundGroups.push(item[groupKey])
    }

    const option = screen.getByText(item.name)
    expect(option).toBeInTheDocument()
    expect(option.parentElement).toHaveAttribute('data-testid', 'optgroup')
    expect(option.parentElement).toHaveAttribute('label', item.grouping)
  })

  const expectedGroupLength = foundGroups.length > 1 ? foundGroups.length : 0
  expect(groups).toHaveLength(expectedGroupLength)
}
