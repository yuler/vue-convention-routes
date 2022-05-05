import glob from 'fast-glob'

export default function generate() {
  const patterns = ['**/*.vue', '!**/__*__.vue', '!**/__*__/**']

  const pages = glob.sync(patterns, {
    //   TODO: From input
    cwd: 'examples/pages',
    onlyFiles: true,
  })

  console.log(pages)
}

generate()
