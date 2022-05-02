import { workspace, Uri } from 'vscode'

export function createDirectory(path: string) {
  workspace.fs.createDirectory(Uri.file(path))
}
