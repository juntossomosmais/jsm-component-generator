import { createTest } from '../vue/create'
import { createFile } from '../../builders/file'
import { buildTemplate } from '../../builders/template'

import { TEMPLATES } from './template'

function createVue(storePath: string, name: string) {
  createFile(`${storePath}/${name}.vue`, buildTemplate(name, TEMPLATES.vue))
}

function createStyle(storePath: string, name: string) {
  createFile(`${storePath}/${name}.scss`, buildTemplate(name, TEMPLATES.scss))
}

export const createFiles = (storePath: string, name: string) => {
  createVue(storePath, name)
  createStyle(storePath, name)
  createTest(storePath, name)
}
