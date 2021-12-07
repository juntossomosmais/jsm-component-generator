import { commands, ExtensionContext, window } from "vscode";
import { createComponent } from "./builders";

const EXTENSION_NAME = "jsm-vue-component-generator";

export function activate({ subscriptions }: ExtensionContext) {
  const generate = commands.registerCommand(
    `${EXTENSION_NAME}.generate`,
    handleCreateComponent
  );

  subscriptions.push(generate);
}

export function deactivate() {}

async function handleCreateComponent({ path }: { path: string }) {
  const fileName = await window.showInputBox({
    title: "Enter the name of the Componente",
    placeHolder: "Example",
  });
  if (path && fileName) {
    return await createComponent(path, fileName);
  }

  return window.showErrorMessage("Something went wrong!");
}
