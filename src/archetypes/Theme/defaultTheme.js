const colorPalette = require('./colorPalette')

module.exports = {
  // Base background colors. The color-background variable and its variants are
  // the primary backgrounds for the application. These will usually be white or
  // light grey for light-colored themes, while the color-background-contrast
  // group will be dark grey/black. For dark themes, these groups would be
  // reversed (color-background black, color-background-contrast white).
  'color-background-light': colorPalette['white'],
  'color-background': colorPalette['grey-light'],
  'color-background-dark': colorPalette['grey'],

  'color-background-contrast-light': colorPalette['grey'],
  'color-background-contrast': colorPalette['grey-warm'],
  'color-background-contrast-dark': colorPalette['grey-dark'],

  'color-border': colorPalette['grey-warm'],

  // Theme primary and accent colors
  'color-primary-light': colorPalette['teal-light'],
  'color-primary': colorPalette['teal-click'],
  'color-primary-dark': colorPalette['teal-dark'],
  'color-primary-darker': colorPalette['stormy'],

  'color-accent': colorPalette['red-tomato'],
  'color-accent-dark': colorPalette['red-dark'],

  'color-neutral-light': colorPalette['grey'],
  'color-neutral': colorPalette['grey-warm'],
  'color-neutral-dark': colorPalette['grey-dark'],

  // Success/error message coloring
  'color-info': colorPalette['teal-dark'],
  'color-success': colorPalette['teal-light'],
  'color-warning': colorPalette['yellow'],
  'color-error': colorPalette['red-tomato'],

  // Text colors
  'color-text-primary': colorPalette['grey-dark'],
  'color-text-secondary': colorPalette['grey-warm'],
  'color-text-disabled': colorPalette['grey'],
  'color-text-accent': colorPalette['teal-dark'],

  'color-text-on-contrast-light': colorPalette['grey-dark'],
  'color-text-on-contrast': colorPalette['dark'],
  'color-text-on-contrast-dark': colorPalette['white'],

  'color-text-on-primary-light': colorPalette['grey-dark'],
  'color-text-on-primary': colorPalette['white'],
  'color-text-on-primary-dark': colorPalette['white'],
  'color-text-on-primary-darker': colorPalette['white'],

  'color-text-on-accent': colorPalette['white'],
  'color-text-on-accent-dark': colorPalette['white'],

  'color-text-on-neutral-light': colorPalette['grey-dark'],
  'color-text-on-neutral': colorPalette['white'],
  'color-text-on-neutral-dark': colorPalette['white'],

  // Focus indicator settings
  'focus-indicator': `2px dotted ${colorPalette['grey-dark']}`,
  'focus-indicator-contrast': `2px dotted ${colorPalette['grey-light']}`,
  'focus-indicator-offset': '2px',
  'focus-indicator-inset': '-2px',

  // Spacing variables for white space or spacing within and between components
  'spacing-xs': '4px',
  'spacing-s': '8px',
  'spacing-m': '16px',
  'spacing-l': '24px',
  'spacing-xl': '32px',
  'spacing-xxl': '64px',
  'spacing-xxxl': '96px',
}
