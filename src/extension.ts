import { commands, ExtensionContext, window } from "vscode";
import { createVueComponent, createReactComponent } from "./builders";

const EXTENSION_NAME = "jsm-generator";

export function activate({ subscriptions }: ExtensionContext) {
  const generateVue = commands.registerCommand(
    `${EXTENSION_NAME}.generateVue`,
    handleCreateVueComponent
  );
  const generateReact = commands.registerCommand(
    `${EXTENSION_NAME}.generateReact`,
    handleCreateReactComponent
  );

  const generateReactJS = commands.registerCommand(
    `${EXTENSION_NAME}.generateReactJS`,
    handleCreateReactComponentJS
  );

  subscriptions.push(generateVue);
  subscriptions.push(generateReact);
  subscriptions.push(generateReactJS);
}

export function deactivate() {}

async function handleCreateVueComponent({ path }: { path: string }) {
  const fileName = await window.showInputBox({
    title: "Enter the name of the Vue Component",
    placeHolder: "MyVueComponent",
  });
  if (path && fileName) {
    return await createVueComponent(path, fileName);
  }

  return window.showErrorMessage("Something went wrong!");
}

async function handleCreateReactComponent({ path }: { path: string }) {
  const fileName = await window.showInputBox({
    title: "Enter the name of the React Component (TS)",
    placeHolder: "MyReactComponent",
  });
  if (path && fileName) {
    return await createReactComponent(path, fileName);
  }

  return window.showErrorMessage("Something went wrong!");
}
async function handleCreateReactComponentJS({ path }: { path: string }) {
  const fileName = await window.showInputBox({
    title: "Enter the name of the React Component (JS)",
    placeHolder: "MyReactComponent",
  });
  if (path && fileName) {
    return await createReactComponent(path, fileName, true);
  }

  return window.showErrorMessage("Something went wrong!");
}
