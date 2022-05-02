import { createFile } from '../../builders/file'
import { buildTemplate } from '../../builders/template'

import { TEMPLATES } from './template'

export function createVue(storePath: string, name: string) {
  createFile(`${storePath}/${name}.vue`, buildTemplate(name, TEMPLATES.vue))
}

export function createScss(storePath: string, name: string) {
  createFile(`${storePath}/${name}.scss`, buildTemplate(name, TEMPLATES.scss))
}

export function createTest(storePath: string, name: string) {
  createFile(
    `${storePath}/__tests__/${name}.spec.ts`,
    buildTemplate(name, TEMPLATES.test)
  )
}

export const createFiles = (storePath: string, name: string) => {
  createVue(storePath, name)
  createScss(storePath, name)
  createTest(storePath, name)
}
