import { workspace, Uri } from 'vscode'

import { TEMPLATES, VueTemplates } from './templates'
import { VUETIFY_TEMPLATES } from './vuetify/templates'

export function createVue(
  storePath: string,
  name: string,
  templateFactory?: (name: string) => VueTemplates
) {
  const TEMPLATE = templateFactory || TEMPLATES

  workspace.fs.writeFile(
    Uri.file(`${storePath}/${name}.vue`),
    Buffer.from(TEMPLATE(name).vue)
  )
}

export function createScss(
  storePath: string,
  name: string,
  templateFactory?: (name: string) => VueTemplates
) {
  const TEMPLATE = templateFactory || TEMPLATES

  workspace.fs.writeFile(
    Uri.file(`${storePath}/${name}.scss`),
    Buffer.from(TEMPLATE(name).scss)
  )
}

export function createTest(
  storePath: string,
  name: string,
  templateFactory?: (name: string) => VueTemplates
) {
  const TEMPLATE = templateFactory || TEMPLATES

  workspace.fs.writeFile(
    Uri.file(`${storePath}/__tests__/${name}.spec.ts`),
    Buffer.from(TEMPLATE(name).test)
  )
}

export const createFiles = (
  storePath: string,
  name: string,
  templateFactory?: (name: string) => VueTemplates
) => {
  createVue(storePath, name, templateFactory)
  createScss(storePath, name, templateFactory)
  createTest(storePath, name, templateFactory)
}

export const createVuetifyFiles = (storePath: string, name: string) => {
  createVue(storePath, name, VUETIFY_TEMPLATES)
  createScss(storePath, name, VUETIFY_TEMPLATES)
  createTest(storePath, name)
}
