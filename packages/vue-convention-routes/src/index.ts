import fg from 'fast-glob'
import path from 'path'
import {pascalCase} from '@shared/index'

export default async function generate() {
  const patterns = ['*./*.layout.vue', '*/*.route.vue', '!*./*.route.vue']
  const input = 'test/fixtures'

  // const dirent = await fs.readdir(path.resolve(input), {
  //   withFileTypes: true,
  //   encoding: 'utf-8',
  // })
  // const dirs = dirent.filter(dirent => dirent.isDirectory())
  // console.log(dirs)

  const files = await fg(patterns, {
    cwd: input,
    deep: 2,
    onlyFiles: true,
  })

  const routes = files.map(route => path.dirname(route))

  let code = ``

  for (const route of routes) {
    code += `{
      name: '${pascalCase(route)}',
      path: '${route}',
      component: () => import('@/pages/${route}')
    },`
  }

  return `
    export default [
      ${code}
    ]
  `
}
