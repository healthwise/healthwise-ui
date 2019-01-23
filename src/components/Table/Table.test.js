/* global jest describe it expect */
import React from 'react'
import renderer from 'react-test-renderer'

import Table from './index'

const headers = [
  [
    {
      key: 'col1',
      label: 'Column 1',
    },
    {
      key: 'col2',
      label: 'Column 2',
    },
  ],
]

const data = [
  {
    col1: 'row11',
    col2: 'row12',
  },
  {
    col1: 'row21',
    col2: 'row22',
  },
]

describe('<Table />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Table headers={headers} data={data} caption="Test caption" />)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with no data', () => {
    const tree = renderer.create(<Table headers={headers} data={[]} caption="Test caption" />)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with no headers', () => {
    const tree = renderer.create(<Table headers={[]} data={data} caption="Test caption" />)
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with no headers or data', () => {
    const tree = renderer.create(<Table headers={[]} data={[]} caption="Test caption" />)
    expect(tree).toMatchSnapshot()
  })

  it('renders type int headers correctly', () => {
    const tree = renderer.create(
      <Table
        headers={[
          [
            {
              key: 'col1',
              label: 'Column 1',
              type: 'int',
            },
            {
              key: 'col2',
              label: 'Column 2',
              type: 'int',
            },
          ],
        ]}
        data={data}
        caption="Test caption"
      />
    )
    expect(tree).toMatchSnapshot()
  })

  it('renders totals correctly', () => {
    const tree = renderer.create(
      <Table
        headers={[
          [
            {
              key: 'col1',
              label: 'Column 1',
              type: 'id',
            },
            {
              key: 'col2',
              label: 'Column 2',
            },
            {
              key: 'col3',
              label: 'Column 3',
              type: 'int',
            },
          ],
        ]}
        data={[
          {
            col1: 'row 1 label',
            col2: 'test 1',
            col3: 15,
          },
          {
            col1: 'row 2 label',
            col2: 'test 2',
            col3: 15,
          },
        ]}
        caption="Test caption"
        includeTotal
      />
    )
    expect(tree).toMatchSnapshot()
  })

  it('renders type date headers correctly', () => {
    const tree = renderer.create(
      <Table
        headers={[
          [
            {
              key: 'col1',
              label: 'Column 1',
              type: 'date',
            },
            {
              key: 'col2',
              label: 'Column 2',
              type: 'date',
            },
          ],
        ]}
        data={[
          {
            col1: '01/01/2017',
            col2: '02/25/2017',
          },
          {
            col1: '12/15/2017',
            col2: '10/30/2017',
          },
        ]}
        caption="Test caption"
      />
    )
    expect(tree).toMatchSnapshot()
  })

  it('renders type centered headers correctly', () => {
    const tree = renderer.create(
      <Table
        headers={[
          [
            {
              key: 'col1',
              label: 'Column 1',
              type: 'centered',
            },
            {
              key: 'col2',
              label: 'Column 2',
              type: 'centered',
            },
          ],
        ]}
        data={data}
        caption="Test caption"
      />
    )
    expect(tree).toMatchSnapshot()
  })

  it('validates headers with string values are correct type', () => {
    console.error = jest.fn()
    renderer.create(
      <Table
        headers={[[{ key: 'col1', label: 'Column 1', type: 'date' }]]}
        data={[]}
        caption="Test caption"
      />
    )
    expect(console.error).not.toBeCalled()
  })

  it('validates headers with wrong properties are not correct type', () => {
    console.error = jest.fn()
    renderer.create(
      <Table headers={[[{ key: 1, label: ['foo', 'bar'] }]]} data={[]} caption="Test caption" />
    )
    expect(console.error).toBeCalled()
  })

  it('validates headers with incorrect keys are not valid', () => {
    console.error = jest.fn()
    renderer.create(
      <Table headers={[[{ foo: 'foo', bar: 'bar' }]]} data={[]} caption="Test caption" />
    )
    expect(console.error).toBeCalled()
  })

  it('renders list type correctly', () => {
    const tree = renderer.create(
      <Table
        headers={[
          [
            {
              key: 'col1',
              label: 'Column 1',
              type: 'id',
            },
            {
              key: 'col2',
              label: 'Column 2',
            },
            {
              key: 'col3',
              label: 'Column 3',
              type: 'int',
            },
          ],
        ]}
        data={[
          {
            col1: 'row 1 label',
            col2: 'test 1',
            col3: 15,
          },
          {
            col1: 'row 2 label',
            col2: 'test 2',
            col3: 15,
          },
        ]}
        caption="Test caption"
        type="list"
      />
    )
    expect(tree).toMatchSnapshot()
  })

  it('renders list type correctly with two levels of headings', () => {
    const tree = renderer.create(
      <Table
        headers={[
          [
            {
              key: 'col1',
              label: 'Column 1',
              type: 'id',
            },
            {
              key: 'col2',
              label: 'Column 2',
            },
            {
              key: 'col3',
              label: 'Column 3',
              type: 'int',
            },
          ],
          [
            {
              key: 'col12',
              label: 'Second Column 1',
              type: 'id',
            },
            {
              key: 'col22',
              label: 'Second Column 2',
            },
            {
              key: 'col23',
              label: 'Second Column 3',
              type: 'int',
            },
          ],
        ]}
        data={[
          {
            col21: 'row 1 label',
            col22: 'test 1',
            col23: 15,
          },
          {
            col21: 'row 2 label',
            col22: 'test 2',
            col23: 15,
          },
        ]}
        caption="Test caption"
        type="list"
      />
    )
    expect(tree).toMatchSnapshot()
  })

  it('renders list type correctly with two levels of headings with colspan', () => {
    const tree = renderer.create(
      <Table
        headers={[
          [
            {
              key: 'col1',
              label: 'Column 1',
              type: 'id',
              colspan: 3,
            },
          ],
          [
            {
              key: 'col12',
              label: 'Second Column 1',
              type: 'id',
            },
            {
              key: 'col22',
              label: 'Second Column 2',
            },
            {
              key: 'col23',
              label: 'Second Column 3',
              type: 'int',
            },
          ],
        ]}
        data={[
          {
            col21: 'row 1 label',
            col22: 'test 1',
            col23: 15,
          },
          {
            col21: 'row 2 label',
            col22: 'test 2',
            col23: 15,
          },
        ]}
        caption="Test caption"
        type="list"
      />
    )
    expect(tree).toMatchSnapshot()
  })
})
