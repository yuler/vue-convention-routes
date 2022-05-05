import glob from 'fast-glob'
// import fs from 'node:fs/promises'
// import path from 'node:path'

export default async function generate() {
  const patterns = ['*./*.layout.vue', '*/*.route.vue', '!*./*.route.vue']
  const input = 'test/fixtures'

  // const dirent = await fs.readdir(path.resolve(input), {
  //   withFileTypes: true,
  //   encoding: 'utf-8',
  // })
  // const dirs = dirent.filter(dirent => dirent.isDirectory())
  // console.log(dirs)

  const routes = glob.sync(patterns, {
    cwd: input,
    onlyFiles: true,
  })

  console.log(routes)
}

generate()
