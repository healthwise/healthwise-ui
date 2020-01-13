# 0.0.17

## TextArea

- Added `disabled` prop

# 0.0.16

- New attempt at hopefully successful `npm publish`
- Specified `rimraf` dependency
- Slight update to README
- Updated LICENSE copyright date

# 0.0.15

## DropDown

- Added `disabled` prop

## General

- Added `README.md`
- Modified `CHANGELOG.md` to allow version-based comments

# 0.0.14 & previous

## Theme

- **BREAKING**: Removed default export. Changed to `createTheme` named export.
- **BREAKING**: Changed some color palette variables
- Added `ThemeProvider` component
- Added `CssVars` component

## Button

- **BREAKING**: Renamed `theme` prop to `color`
- **BREAKING**: Changed `color` props from kebab-case to camelCase (e.g. `primary-light` to `primaryLight`)

## CssBaseline

- **BREAKING**: Removed `children` prop

## DropDown

- **BREAKING**: Removed `hw-icon-white` class on arrow icons

## ProgressBar

- **BREAKING**: Renamed `theme` prop to `color`

## TextArea

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
