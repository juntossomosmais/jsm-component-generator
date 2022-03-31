import { window } from 'vscode'

import { createComponentDirectory } from './createDirectory'
import { createFiles, createVuetifyFiles } from './createFiles'

export async function createVueComponent(path: string, fileName: string) {
  createComponentDirectory(path, fileName)

  const FULL_PATH = `${path}/${fileName}`
  createFiles(FULL_PATH, fileName)

  window.showInformationMessage(
    `Component ${fileName} successfully created in ${path}`
  )
}

export async function createVuetifyComponent(path: string, fileName: string) {
  createComponentDirectory(path, fileName)

  const FULL_PATH = `${path}/${fileName}`
  createVuetifyFiles(FULL_PATH, fileName)

  window.showInformationMessage(
    `Vuetify Wrapper ${fileName} successfully created in ${path}`
  )
}
