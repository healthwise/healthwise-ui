# Change Log

## 4.0.1 - September 12, 2018

- Changed `color-primary` to `teal-click` and `color-accent` to `red-tomato` for better accessibility
- Updated `grey-warm` color for better accessibility

## 4.0.0 - July 9, 2018

- **BREAKING**: Removed deprecated theme variables
- **BREAKING**: Updated API.

New usage:

```
import Theme from '@healthwise/theme'
const theme = Theme({ ...appTheme })
```

Or commonJS style:

```
const Theme = require('@healthwise/theme')
const theme = Theme({ ...appTheme })
```

To import default theme settings or Healthwise color palette:

```
import defaultTheme from '@healthwise/theme/defaultTheme'
import colorPalette from '@healthwise/theme/colorPalette'
```

## 3.0.5 - June 22, 2018

- Updating focus indicator colors, per design request

## 3.0.4 - May 24, 2018

- Version bump. Testing publishing strategies.

## 3.0.3 - May 24, 2018

- Updated package-lock files

## 3.0.2 - May 8, 2018

- Update React peer dependency to `>=15.4.2` to remove warnings on React 16

## 3.0.1 - April 27, 2018

- Updated default `color-error` variable from `red-dark` to `red-hot`

## 3.0.0 - December 27, 2017

- Added new function-based color variables
- Added Healthwise color palette variables under `theme.hwColors`
- Added deprecated theme variables under `theme.deprecatedSettings`, which will all be removed in 4.0

## 2.0.1 - Initial release
