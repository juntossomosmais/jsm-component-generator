import { window } from "vscode";

import { createComponentDirectory } from "./createDirectory";
import { createFiles } from "./createFiles";

export async function createReactComponent(
  path: string,
  fileName: string,
  js?: boolean
) {
  createComponentDirectory(path, fileName);

  const FULL_PATH = `${path}/${fileName}`;
  createFiles(FULL_PATH, fileName, js);

  window.showInformationMessage(
    `React Component ${fileName} successfully created in ${path}`
  );
}
