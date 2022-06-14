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
    `${storePath}/styles.${extension}`,
    buildTemplate(name, TEMPLATES.style)
  )
}

export function createTest(storePath: string, name: string, extension: string) {
  createFile(
    `${storePath}/${name}.spec.${extension}`,
    buildTemplate(name, TEMPLATES.test)
  )
}

export const createFiles = (storePath: string, name: string, js?: boolean) => {
  const extensions = js ? 'js' : 'ts'
  const suffix = js ? '' : 'x'

  createIndex(storePath, name, `${extensions}${suffix}`)
  createStyle(storePath, name, extensions)
  createTest(storePath, name, `${extensions}${suffix}`)
}
