import { window } from 'vscode'

import { createDirectory } from '../../builders/folder'

import { createFiles } from './create'

export async function createVuetifyComponent(path: string, fileName: string) {
  const FULL_PATH = `${path}/${fileName}`
  createDirectory(FULL_PATH)
  createFiles(FULL_PATH, fileName)

  window.showInformationMessage(
    `Vuetify Wrapper ${fileName} successfully created in ${path}`
  )
}
