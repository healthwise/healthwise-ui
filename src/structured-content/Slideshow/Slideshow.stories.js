import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Slideshow from './index'

const slideshowJSON = {
  certifiedDate: '2017-01-06',
  legal: {
    disclaimerText: 'Disclaimer text',
  },
  credits: {
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
  },
  html: `
    <ol>
      <li>
        <h2 class="HwCmd">Slide 1</h2 class="HwCmd">
        <img src="http://via.placeholder.com/400x400">
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </li>
      <li>
        <h2 class="HwCmd">Slide 2</h2 class="HwCmd">
        <img src="http://via.placeholder.com/400x400">
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </li>
      <li>
        <h2 class="HwCmd">Slide 3</h2 class="HwCmd">
        <img src="http://via.placeholder.com/400x400">
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </li>
    </ol>
  `,
}

storiesOf('Structured Content/Slideshow', module)
  .addWithInfo(
    'with slideshow only',
    `
      Demonstrates default slideshow rendering
    `,
    () => <Slideshow item={slideshowJSON} />
  )
  .addWithInfo(
    'with slideshow & hidden disclaimer',
    `
      Demonstrates slideshow rendering with hidden disclaimer
    `,
    () => <Slideshow item={slideshowJSON} hideDisclaimer />
  )
  .addWithInfo(
    'with slideshow & slide select event',
    `
      Demonstrates slideshow rendering with hidden disclaimer & slide select event
    `,
    () => (
      <Slideshow item={slideshowJSON} hideDisclaimer onSlideSelected={action('slide selected')} />
    )
  )
