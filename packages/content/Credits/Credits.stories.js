import React from 'react'
import { storiesOf } from '@storybook/react'
import Credits from './index'

storiesOf('Structured Content/Credits', module)
  .add(
    'with defaults (renders nothing)',
    () => <Credits />,
    {
      info: `
        Demonstates basic rendering with defaults
      `
    }
  )
  .add(
    'with author and no reviewers',
    () => (
      <Credits
        credits={{
          author: {
            name: 'Zaphod Beeblebrox',
          },
        }}
      />
    ),
    {
      info: `
        Demonstrates rendering with author info only
      `
    }
  )
  .add(
    'with author and primary reviewers',
    () => (
      <Credits
        credits={{
          author: {
            name: 'Zaphod Beeblebrox',
          },
          primaryReviewers: [
            {
              name: 'Ford Prefect',
            },
            {
              name: 'Arthur Dent',
            },
          ],
        }}
      />
    ),
    {
      info: `
        Demonstrates rendering with author and primary reviewer info
      `
    }
  )
  .add(
    'with all data, default labels',
    () => (
      <Credits
        asOfDate="2017/01/01"
        credits={{
          author: {
            name: 'Zaphod Beeblebrox',
          },
          primaryReviewers: [
            {
              name: 'Ford Prefect',
            },
            {
              name: 'Arthur Dent',
            },
          ],
          secondaryReviewers: [
            {
              name: 'Trillian',
            },
            {
              name: 'Marvin, the Paranoid Android',
            },
          ],
        }}
      />
    ),
    {
      info: `
        Demonstrates rendering with a full data set and the default label values
      `
    }
  )
  .add(
    'with all data, overriding labels',
    () => (
      <Credits
        currentLabel="THE CURRENT LABEL"
        authorLabel="THE AUTHOR LABEL"
        reviewLabel="THE REVIEW LABEL"
        asOfDate="2017/01/01"
        credits={{
          author: {
            name: 'Zaphod Beeblebrox',
          },
          primaryReviewers: [
            {
              name: 'Ford Prefect',
            },
            {
              name: 'Arthur Dent',
            },
          ],
          secondaryReviewers: [
            {
              name: 'Trillian',
            },
            {
              name: 'Marvin, the Paranoid Android',
            },
          ],
        }}
      />
    ),
    {
      info: `
        Demonstrates rendering with a full data set and overriding default label values
      `
    }
  )
