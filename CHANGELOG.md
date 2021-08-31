# 3.2.2

- Removing maxWidth prop from `Modal`
- Removing unused fullScreen prop from `Modal`
- Fixing onClose event for `Modal`
- Removing onClose stories for `Modal` since they are overidden by ModalStoryWrapper

# 3.2.1

- Adding initial z-index to top level `Modal` container
- Updating classnames in `Modal` for user css targeting
- Adding max-height to `Modal`

# 3.2.0

- Fixing `Modal` component to be similar to it's @material-ui version
- Adding publish scripts for use on windows
- Reverting `Button` font-size to previous value before 3.0.0

# 3.1.2

- dopublish script not working correctly, have to publish from build manually
- removing prepare script

# 3.1.1

- Removed husky install postinstall script and added a note about it in README

# 3.1.0

- Added `Ring` Component
- Added externalValidation prop to `InputText` component

# 3.0.2

- Dependency updates: Storybook
- Added `ArgsTable` to all stories

# 3.0.1

- Dependency updates: Storybook, core-js
- Added .github to .npmignore

# 3.0.0

- **BREAKING**: Removed `Appbar`
- **BREAKING**: Fixed `ButtonGroup` class name spelling
- **BREAKING**: Migrated `Accordion` from Material-UI to home grown
- **BREAKING**: Migrated `Card` from Material-UI to home grown
- **BREAKING**: Cleaned up size declarations (mostly font sizes) on `ButtonSplit`, `Checkbox`, `Message`, `ProgressBar`, `Radio`, `References`, `Tab`, `TextArea`
- **BREAKING**: Tidied up spacing for `Checkbox`, `Radio`, `References`
- **BREAKING**: Changed to _rem_ units (from _em_) throughout app

# 2.1.3

- Modified disabled states for `TextArea`, `InputText`, and `DropDown`
- A few logic improvements for `Checkbox` and `Radio`

# 2.1.2

- Overriding browser default backgrounds for `viewOnly` state on `InputText` and `TextArea`
- Added precommit testing, linting

# 2.1.1

- Iterating version for new `npm publish`

# 2.1.0 (DEPRECATED - due to `npm publish` mistake)

- Brought more consistency and accessibility to disabled states (`Accordion`, `Button`, `Checkbox`, `DropDown`, `InputText`, `Radio` & `TextArea`)
- Added `viewOnly` prop for `Checkbox`, `InputText`, `Radio` & `TextArea` components (and associated stories)
- Improved a few stories
- Removed manual Storybook build-on-commit process (replaced by Github Action to build/deploy Storybook)

# 2.0.3

- Added pass through for props not explicitly defined in `TextArea` component
- Added story using custom validator for `TextArea` component

# 2.0.2

- Updated to newest version of Storybook
- Converted to MDX stories

# 2.0.1

## DropDown

- Corrected errant prop, from `class` to `className`
- Created fallback for undefined `items` prop

# 2.0.0

## DropDown

- **BREAKING**: Swapped dependency on `react-aria-menubutton` for a CSS-styled native `select`
- **BREAKING**: Removed some class names attached to previous structure
- **BREAKING**: Removed `onSelect` prop (in favor of `onChange`) & return value (for native)
- Added `valueKey` and `nameKey` props, enabling `items` objects to have user-specified keys
- Added `underlined` prop & functionality
- Added `required` prop & functionality
- Enabled `error` to take string (or bool) & display error text
- Tidied up `propTypes`
- Added, documented, & improved several Storybook stories

## LoadingIndicator

- **BREAKING**: Migrated from rotating box to animated dots
- **BREAKING**: Removed some class names attached to previous structure

# 1.0.3

## Checkbox

- Added `label` prop to `Checkbox`

## Radio

- Added `label` prop to `Radio`

# 1.0.2

## InputText

- Swapped `InputText` ref over to createRef (to fix `ref` potentially being `null`)

# 1.0.1

## SplitButton

- Added `SplitButton` component

# 1.0.0

## Modal

- **BREAKING**: Removed `onEnter`, `onEntering`, `onExit`, and `onExiting` props
- **BREAKING**: Mapped our `onClose` prop to the MaterialUI `onExited` handler (for a clearer API)

# 0.0.20

## Checkbox

- Removed `isRequired` prop type specification on `name` & `value`

## TextArea

- Removed `isRequired` prop type specification on `onFocus`, `onBlur`, `onKeyDown`, & `onChange`
- Changed default props for `defaultValue` & `value` from `null` to `undefined`
  - Otherwise, React triggers this warning: "Warning: [your component here] contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://fb.me/react-controlled-components"

# 0.0.19

## DropDown

- Added `error` prop on DropDown Form Control
- Added story to DropDown stories to reflect `error` prop

## TextArea

- Added `error` prop to TextArea Form Control
- Added `required` prop to TextArea Form Control
- Added stories to TextArea stories to reflect `error` prop
- Added story to TextArea stories to reflect `required` prop

# 0.0.18

- Added [Storybook State](https://github.com/dump247/storybook-state/) addon for showing changes in state within one component story

## InputText

- Improved `error` prop handling (allow error to be cleared & revalidated)
- Updated deprecated component lifecycle method, from `UNSAFE_componentWillReceiveProps` to `componentDidUpdate`
- Added support for HTML5 `autoFocus` (while retaining `focused` for now)
- Removed focus from being handled internally
- Added stories for focus and custom error states

# 0.0.17

## TextArea

- Added `disabled` prop

# 0.0.16

- New attempt at successful `npm publish`
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
