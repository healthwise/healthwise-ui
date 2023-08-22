import { action } from '@storybook/addon-actions'

import VideoThumbnail from './index'

const styles = {
  container: {
    width: '200px',
    height: '100px',
  },
}

export default {
  title: 'Media/Video Thumbnail',
  component: VideoThumbnail,
}

export const Default = {
  render: () => (
    <div style={styles.container}>
      <VideoThumbnail
        onThumbnailClick={action('clicked')}
        title="Sample Video"
        src="http://via.placeholder.com/640x360"
      />
    </div>
  ),

  name: 'default',
}
