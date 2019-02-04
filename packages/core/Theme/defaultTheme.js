import colorPalette from './colorPalette'

const defaultTheme = {
  // Base background colors. The color-background variable and its variants are
  // the primary backgrounds for the application. These will usually be white or
  // light grey for light-colored themes, while the color-background-contrast
  // group will be dark grey/black. For dark themes, these groups would be
  // reversed (color-background black, color-background-contrast white).
  colorBackgroundLight: colorPalette.white,
  colorBackground: colorPalette.neutralLighter,
  colorBackgroundDark: colorPalette.neutralLight,

  colorBackgroundContrastLight: colorPalette.neutralLight,
  colorBackgroundContrast: colorPalette.neutralMed,
  colorBackgroundContrastDark: colorPalette.neutralDark,

  colorBorder: colorPalette.neutralMed,

  // Theme primary and accent colors
  colorPrimaryLight: colorPalette.primaryLight,
  colorPrimary: colorPalette.primary,
  colorPrimaryDark: colorPalette.primaryDark,
  colorPrimaryDarker: colorPalette.stormy,

  colorAccent: colorPalette.accent,
  colorAccentDark: colorPalette.accentDark,

  colorNeutralLight: colorPalette.neutralLight,
  colorNeutral: colorPalette.neutralMed,
  colorNeutralDark: colorPalette.neutralDark,

  // Success/error message coloring
  colorInfo: colorPalette.primaryDark,
  colorSuccess: colorPalette.primaryLight,
  colorWarning: colorPalette.yellow,
  colorError: colorPalette.accent,

  // Text colors
  colorTextPrimary: colorPalette.neutralDark,
  colorTextSecondary: colorPalette.neutralMed,
  colorTextDisabled: colorPalette.neutralLight,
  colorTextAccent: colorPalette.primaryDark,

  colorTextOnContrastLight: colorPalette.neutralDark,
  colorTextOnContrast: colorPalette.neutralDarker,
  colorTextOnContrastDark: colorPalette.white,

  colorTextOnPrimaryLight: colorPalette.neutralDark,
  colorTextOnPrimary: colorPalette.white,
  colorTextOnPrimaryDark: colorPalette.white,
  colorTextOnPrimaryDarker: colorPalette.white,

  colorTextOnAccent: colorPalette.white,
  colorTextOnAccentDark: colorPalette.white,

  colorTextOnNeutralLight: colorPalette.neutralDark,
  colorTextOnNeutral: colorPalette.white,
  colorTextOnNeutralDark: colorPalette.white,

  // Focus indicator settings
  focusIndicator: `2px dotted ${colorPalette.neutralDark}`,
  focusIndicatorContrast: `2px dotted ${colorPalette.neutralLighter}`,
  focusIndicatorOffset: '2px',
  focusIndicatorInset: '-2px',

  // Spacing variables for white space or spacing within and between components
  spacingXs: '4px',
  spacingS: '8px',
  spacingM: '16px',
  spacingL: '24px',
  spacingXl: '32px',
  spacingXxl: '64px',
  spacingXxxl: '96px',
}

export default defaultTheme
