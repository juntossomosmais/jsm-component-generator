import { createFile } from '../../builders/file'
import { buildTemplate } from '../../builders/template'

import { TEMPLATES } from './template'

export function createIndex(
  storePath: string,
  name: string,
  extension: string
) {
  createFile(
    `${storePath}/index.${extension}`,
    buildTemplate(name, TEMPLATES.index)
  )
}

export function createStyle(
  storePath: string,
  name: string,
  extension: string
) {
  createFile(
    `${storePath}/style.${extension}`,
    buildTemplate(name, TEMPLATES.style)
  )
}

export function createTest(storePath: string, name: string, extension: string) {
  createFile(
    `${storePath}/index.spec.${extension}`,
    buildTemplate(name, TEMPLATES.test)
  )
}

export const createFiles = (storePath: string, name: string, js?: boolean) => {
  const extensions = js ? 'js' : 'ts'
  createIndex(storePath, name, `${extensions}x`)
  createStyle(storePath, name, extensions)
  createTest(storePath, name, `${extensions}x`)
}
