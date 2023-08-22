module.exports = {
  stories: [
    //'../src/_docs/intro.stories.(js|mdx)',
    //'../src/_docs/accessibility.stories.(js|mdx)',
    //'../src/_docs/*.stories.(js|mdx)',
    '../src/**/*.stories.(js|mdx)',
    //'../src/Accordion/*.stories.(js|mdx)',
    //'../src/AccordionGroup/*.stories.(js|mdx)',
    //'../src/BlockHeading/*.stories.(js|mdx)',
    //'../src/Button/*.stories.(js|mdx)',
    //'../src/ButtonGroup/*.stories.(js|mdx)',
  ],

  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-viewport/register',
    '@dump247/storybook-state/register',
    '@storybook/addon-mdx-gfm',
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  docs: {
    autodocs: true,
  },
}
