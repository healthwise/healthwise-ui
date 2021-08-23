# Healthwise UI

Healthwise UI is a library of shared React components that you can use to quickly build an app using the Healthwise design language.

![GitHub](https://img.shields.io/github/license/healthwise/healthwise-ui?style=flat-square)
![npm (scoped)](https://img.shields.io/npm/v/@healthwise-ui/core?style=flat-square)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@healthwise-ui/core?style=flat-square)

- [Healthwise UI](#healthwise-ui)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Running Tests](#running-tests)
  - [Documentation](#documentation)
  - [Contributing](#contributing)
  - [License](#license)

## Installation

Install @healthwise-ui/core with npm

```bash
  npm install @healthwise-ui/core
```

## Usage

```jsx
import { Button, ProfileIcon } from '@healtwise-ui/core'

function App() {
  return (
    <Button color="primaryDark" raised>
      <ProfileIcon /> Profile
    </Button>
  )
}
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Documentation

[Documentation](https://healthwise.github.io/healthwise-ui/)

In order to enable husky Git hooks manually run the following from the root directory:

```
npx --no-install husky install
```

More info about this bug at the link [here](https://github.com/typicode/husky/issues/851).

## Contributing

Contributions are always welcome!

See `CONTRIBUTING.md` for ways to get started.

## License

[MIT](https://choosealicense.com/licenses/mit/)
