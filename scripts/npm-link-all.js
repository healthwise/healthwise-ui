// This script is intended to be run with the 'lerna exec' command,
// which will run it for every component in the repo.
const path = require('path')
const spawn = require('cross-spawn')

const argv = process.argv
const packageName = process.env.LERNA_PACKAGE_NAME
const rootPath = process.env.LERNA_ROOT_PATH
const spawnOptions = { stdio: 'inherit' }

if (!packageName || !rootPath) {
  printUsage("This script is intended to be run with the 'lerna exec' command")
}
if (argv.length <= 2) {
  printUsage('You must provide a path to your app')
}

// Link component in UI Assets, then in app
const appPath = path.resolve(rootPath, argv[2])
spawn.sync('npm', ['link'], spawnOptions)
spawn.sync('npm', ['link', packageName], { cwd: appPath, ...spawnOptions })

function printUsage (errorMessage = '') {
  console.log()
  if (errorMessage) {
    console.error(`Error: ${errorMessage}`)
    console.log()
  }
  console.log('Usage: npm run npm-link-all -- path/to/app')
  console.log('Or:    lerna exec -- node ../../../scripts/npm-link-all.js path/to/app')
  console.log()
  console.log("Note that 'lerna exec' runs the script from each component directory,")
  console.log('so the path to the script needs to be relative to that directory.')
  console.log()
  process.exit(-1)
}
