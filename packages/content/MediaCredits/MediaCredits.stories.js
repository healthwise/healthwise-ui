import React from 'react'
import { storiesOf } from '@storybook/react'

import MediaCredits from './index'

const styles = {
  container: {
    width: '400px',
  },
}

storiesOf('core|Media/Media Credits', module).add(
  'with defaults',
  () => (
    <div style={styles.container}>
      <MediaCredits
        asOfDate="2017/01/01"
        transcriptHtml="<h2>Transcript</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
        legal={{
          disclaimerText: 'Disclaimer text',
        }}
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
    </div>
  ),
  {
    info: `Demonstrates default rendering of MediaCredits component`,
  }
)
