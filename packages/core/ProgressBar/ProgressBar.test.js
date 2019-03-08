/* global describe, it, expect */
import React from 'react'
import renderer from 'react-test-renderer'

import ProgressBar from './index'

describe('<ProgressBar />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ProgressBar showPercentage percentComplete={45} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('can accept additional class', () => {
    const tree = renderer
      .create(<ProgressBar showPercentage percentComplete={45} className="test" />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders with theme color correctly', () => {
    const tree = renderer
      .create(<ProgressBar theme="neutral" showPercentage percentComplete={45} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders with buffer correctly', () => {
    const tree = renderer
      .create(<ProgressBar progressBarType="buffer" percentComplete={45} buffer={60} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('indeterminate type changes bar', () => {
    const tree = renderer
      .create(
        <ProgressBar
          theme="primary"
          progressBarType="indeterminate"
          showPercentage
          percentComplete={45}
        />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
