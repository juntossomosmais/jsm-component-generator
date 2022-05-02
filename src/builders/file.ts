import { workspace, Uri } from 'vscode'

export function createFile(path: string, template: string) {
  workspace.fs.writeFile(Uri.file(path), Buffer.from(template))
}
