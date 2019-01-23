// App-specific Jest configuration. These settings will override the defaults in
// the @healthwise/react-app-config package.

module.exports = {
  setupFiles: ['<rootDir>/test/setup.js'],
  coverageDirectory: '../coverage',
  testURL: 'http://localhost'
}
