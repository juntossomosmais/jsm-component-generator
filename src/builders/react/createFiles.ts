import { workspace, Uri } from 'vscode'

import { TEMPLATES } from './templates'

export function createIndex(storePath: string, name: string, js?: boolean) {
  workspace.fs.writeFile(
    Uri.file(`${storePath}/index.${js ? 'js' : 'tsx'}`),
    Buffer.from(TEMPLATES(name).index)
  )
}

export function createStyle(storePath: string, name: string, js?: boolean) {
  workspace.fs.writeFile(
    Uri.file(`${storePath}/style.${js ? 'js' : 'ts'}`),
    Buffer.from(TEMPLATES(name).style)
  )
}

export function createTest(storePath: string, name: string, js?: boolean) {
  workspace.fs.writeFile(
    Uri.file(`${storePath}/index.spec.${js ? 'js' : 'tsx'}`),
    Buffer.from(TEMPLATES(name).test)
  )
}

export const createFiles = (storePath: string, name: string, js?: boolean) => {
  createIndex(storePath, name, js)
  createStyle(storePath, name, js)
  createTest(storePath, name, js)
}
