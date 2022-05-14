import path from 'path'
import shell from 'shelljs'

export const isProduction = !process.env.ROLLUP_WATCH

export const getPackageDir = (name, dir = 'lib') => {
  return path.resolve(__dirname, path.join('../packages/', name, dir))
}

export const getOutFile = (dir = 'lib', name, version) => {
  return path.join(__dirname, '../', 'build', dir, name, `${name}_v${version}.js`)
}

export const getDtsFile = (name, dir = 'lib') => {
  return path.join(getPackageDir(name, dir), 'index.d.ts')
}

export const getClearDir = (dir = 'lib') => {
  return path.resolve(__dirname, '../', dir)
}

export const getInputFile = (name, source) => {
  return path.resolve(__dirname, path.join('../packages/', name, source))
}

// const getOrder = (pkg) => {
//   const order = pkg.get('order')
//   return isNaN(order) ? 100 : order
// }

export const packages = shell.ls('packages')

export const devPackages = packages

export const inputs = isProduction ? packages : devPackages