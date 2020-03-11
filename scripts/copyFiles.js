const fs = require('fs-extra')
const path = require('path')

const paths = {
  root: path.resolve(__dirname, '..'),
  build: path.resolve(__dirname, '..', 'build'),
}

const copyToBuild = (baseDir, filename) => {
  fs.copySync(path.resolve(baseDir, filename), path.resolve(paths.build, filename))
}

copyToBuild(paths.root, 'LICENSE')
copyToBuild(paths.root, 'package.json')
copyToBuild(paths.root, 'README.md')
copyToBuild(paths.root, 'CHANGELOG.md')
