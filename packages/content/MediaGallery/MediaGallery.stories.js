import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import MediaGallery from './index'

const galleryWithImages = {
  id: '1',
  title: { consumer: 'Gallery' },
  topics: [
    {
      id: '1',
      type: 'hwMedia',
      certifiedDate: '2017-01-06',
      lang: 'en-us',
      title: { consumer: 'Image' },
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
        <div>
          <h3>Image 1</h3>
          <div class="HwImageWrapper">
            <img src="http://via.placeholder.com/400.png">
          </div>
          <div class="HwSection">
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      `,
    },
    {
      id: '2',
      type: 'hwMedia',
      certifiedDate: '2017-01-06',
      lang: 'en-us',
      title: { consumer: 'Image' },
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
        <div>
          <h3>Image 2</h3>
          <div class="HwImageWrapper">
            <img src="http://via.placeholder.com/400.png">
          </div>
          <div class="HwSection">
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      `,
    },
  ],
}

const galleryWithImagesAndSlideshow = {
  id: '1',
  title: { consumer: 'Gallery' },
  topics: [
    {
      id: '1',
      type: 'hwMedia',
      certifiedDate: '2017-01-06',
      lang: 'en-us',
      title: { consumer: 'Image' },
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
        <div>
          <h3>Image 1</h3>
          <div class="HwImageWrapper">
            <img src="http://via.placeholder.com/400.png">
          </div>
          <div class="HwSection">
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      `,
    },
    {
      id: '1',
      type: 'hwSlideshow',
      certifiedDate: '2017-01-06',
      lang: 'en-us',
      title: { consumer: 'Slideshow' },
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
            <img src="http://via.placeholder.com/400.png">
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </li>
          <li>
            <h2 class="HwCmd">Slide 2</h2 class="HwCmd">
            <img src="http://via.placeholder.com/400.png">
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </li>
          <li>
            <h2 class="HwCmd">Slide 3</h2 class="HwCmd">
            <img src="http://via.placeholder.com/400.png">
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </li>
        </ol>
      `,
    },
  ],
}

storiesOf('Structured Content/Media Gallery', module)
  .add(
    'with images',
    () => <MediaGallery item={galleryWithImages} />,
    {
      info: `
        Demonstrates rendering gallery of images
      `
    }
  )
  .add(
    'with images and slideshow',
    () => <MediaGallery item={galleryWithImagesAndSlideshow} />,
    {
      info: `
        Demonstrates rendering gallery of images and slideshow
      `
    }
  )
  .add(
    'with events',
    () => (
      <MediaGallery
        item={galleryWithImagesAndSlideshow}
        onThumbnailClick={action('thumbnail clicked')}
        onVideoStart={action('video started')}
        onVideoProgress={action('video progress point')}
        onSlideSelected={action('slideshow slide selected')}
      />
    ),
    {
      info: `
        Demonstrates passing in events
      `
    }
  )
