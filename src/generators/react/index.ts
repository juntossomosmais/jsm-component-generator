import { window } from 'vscode'

import { createDirectory } from '../../builders/folder'

import { createFiles } from './create'

export async function createReactComponent(
  path: string,
  fileName: string,
  js?: boolean
) {
  createDirectory(`${path}/${fileName}`)

  const FULL_PATH = `${path}/${fileName}`
  createFiles(FULL_PATH, fileName, js)

  window.showInformationMessage(
    `React Component ${fileName} successfully created in ${path}`
  )
}
