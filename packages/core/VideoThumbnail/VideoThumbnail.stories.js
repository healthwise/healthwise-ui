import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import VideoThumbnail from './index'

storiesOf('core|Media/Video Thumbnail', module).add(
  'a basic video thumbnail',
  () => (
    <div style={{ width: '200px', height: '100px' }}>
      <VideoThumbnail
        onThumbnailClick={action('clicked')}
        title="Sample Video"
        src="http://via.placeholder.com/640x360"
      />
    </div>
  ),
  {
    info: `
        Demonstates a basic video thumbnail
      `,
  }
)
