module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: [
    '../src/_docs/intro.stories.(js|mdx)',
    '../src/_docs/*.stories.(js|mdx)',
    '../src/**/*.stories.(js|mdx)',
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-viewport/register',
    '@dump247/storybook-state/register',
  ],
}
