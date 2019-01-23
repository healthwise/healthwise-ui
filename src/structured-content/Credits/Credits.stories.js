import React from 'react'
import { storiesOf } from '@storybook/react'
import Credits from './index'

storiesOf('Structured Content/Credits', module)
  .addWithInfo(
    'with defaults (renders nothing)',
    `
      Demonstates basic rendering with defaults
    `,
    () => <Credits />
  )
  .addWithInfo(
    'with author and no reviewers',
    `
      Demonstrates rendering with author info only
    `,
    () => (
      <Credits
        credits={{
          author: {
            name: 'Zaphod Beeblebrox',
          },
        }}
      />
    )
  )
  .addWithInfo(
    'with author and primary reviewers',
    `
      Demonstrates rendering with author and primary reviewer info
    `,
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
    )
  )
  .addWithInfo(
    'with all data, default labels',
    `
      Demonstrates rendering with a full data set and the default label values
    `,
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
    )
  )
  .addWithInfo(
    'with all data, overriding labels',
    `
      Demonstrates rendering with a full data set and overriding default label values
    `,
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
    )
  )
