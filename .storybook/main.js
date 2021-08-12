module.exports = {
  stories: [
    '../src/_docs/intro.stories.mdx',
    '../src/_docs/*.stories.mdx',
    '../src/**/*.stories.mdx',
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
