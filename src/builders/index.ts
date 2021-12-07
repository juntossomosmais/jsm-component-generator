import { window } from "vscode";

import { createStoreDirectory } from "./createDirectory";
import * as creaters from "./createFiles";

export async function createStore(path: string, fileName: string) {
  createStoreDirectory(path, fileName);

  const STORE_PATH = `${path}/${fileName}`;
  creaters.createVue(STORE_PATH, fileName);
  creaters.createScss(STORE_PATH, fileName);
  creaters.createTest(STORE_PATH, fileName);

  window.showInformationMessage(
    `Store ${fileName} has been created in ${path}`
  );
}
