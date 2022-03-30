import { workspace, Uri } from 'vscode'

export function createComponentDirectory(path: string, filename: string) {
  workspace.fs.createDirectory(Uri.file(`${path}/${filename}`))
  workspace.fs.createDirectory(Uri.file(`${path}/${filename}/__tests__`))
}
