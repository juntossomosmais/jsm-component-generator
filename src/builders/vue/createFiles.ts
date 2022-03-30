import { workspace, Uri } from 'vscode'

import { TEMPLATES } from './templates'

export function createVue(storePath: string, name: string) {
  workspace.fs.writeFile(
    Uri.file(`${storePath}/${name}.vue`),
    Buffer.from(TEMPLATES(name).vue)
  )
}

export function createScss(storePath: string, name: string) {
  workspace.fs.writeFile(
    Uri.file(`${storePath}/${name}.scss`),
    Buffer.from(TEMPLATES(name).scss)
  )
}

export function createTest(storePath: string, name: string) {
  workspace.fs.writeFile(
    Uri.file(`${storePath}/__tests__/${name}.spec.ts`),
    Buffer.from(TEMPLATES(name).test)
  )
}

export const createFiles = (storePath: string, name: string) => {
  createVue(storePath, name)
  createScss(storePath, name)
  createTest(storePath, name)
}
