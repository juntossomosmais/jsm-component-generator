import { window } from 'vscode'

import { createDirectory } from '../../builders/folder'

import { createFiles } from './create'

export async function createVueComponent(path: string, fileName: string) {
  const FULL_PATH = `${path}/${fileName}`
  createDirectory(FULL_PATH)
  createDirectory(`${FULL_PATH}/__tests__`)
  createFiles(FULL_PATH, fileName)

  window.showInformationMessage(
    `Component ${fileName} successfully created in ${path}`
  )
}
