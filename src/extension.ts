import { commands, ExtensionContext, window } from "vscode";
import { createStore } from "./builders";

const EXTENSION_NAME = "jsm-vue-component-generator";

export function activate({ subscriptions }: ExtensionContext) {
  const generate = commands.registerCommand(
    `${EXTENSION_NAME}.generate`,
    handleCreateStore
  );

  subscriptions.push(generate);
}

export function deactivate() {}

async function handleCreateStore({ path }: { path: string }) {
  const fileName = await window.showInputBox({
    title: "Enter the name of the Componente",
    placeHolder: "Example",
  });
  if (path && fileName) {
    return await createStore(path, fileName);
  }

  return window.showErrorMessage("Something went wrong!");
}
