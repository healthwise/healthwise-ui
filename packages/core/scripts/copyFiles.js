const fs = require('fs-extra')
const path = require('path')

const paths = {
  root: path.resolve(__dirname, '..', '..', '..'),
  packageRoot: path.resolve(__dirname, '..'),
  build: path.resolve(__dirname, '..', 'build'),
}

const copyToBuild = (baseDir, filename) => {
  fs.copySync(path.resolve(baseDir, filename), path.resolve(paths.build, filename))
}

copyToBuild(paths.root, 'LICENSE')
copyToBuild(paths.packageRoot, 'package.json')
copyToBuild(paths.packageRoot, 'README.md')
copyToBuild(paths.packageRoot, 'CHANGELOG.md')
