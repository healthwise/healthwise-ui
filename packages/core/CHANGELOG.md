# Theme

- **BREAKING**: Removed default export. Changed to `createTheme` named export.
- **BREAKING**: Changed some color palette variables
- Added `ThemeProvider` component
- Added `CssVars` component

# Button

- **BREAKING**: Renamed `theme` prop to `color`
- **BREAKING**: Changed `color` props from kebab-case to camelCase (e.g. `primary-light` to `primaryLight`)

# CssBaseline

- **BREAKING**: Removed `children` prop

# DropDown

- **BREAKING**: Removed `hw-icon-white` class on arrow icons

# ProgressBar

- **BREAKING**: Renamed `theme` prop to `color`

# TextArea

- **BREAKING**: Added prop `defaultValue`; mapped `value` to native `value` attribute (formerly `defaultValue`)

# Deprecate?

- CssParser
- FeatureFlipper
- Image
- KeyGen
- Translation
- ValidationError

# Rename?

- TextArea -> Textarea
- DropDown -> Select
- InputText -> Input ?
- Message -> ?
