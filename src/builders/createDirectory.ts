import { workspace, Uri } from "vscode";

export function createStoreDirectory(path: string, filename: string) {
  workspace.fs.createDirectory(Uri.file(`${path}/${filename}`));
}
