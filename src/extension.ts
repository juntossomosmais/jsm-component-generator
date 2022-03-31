import { commands, ExtensionContext, window } from 'vscode'

import {
  createVueComponent,
  createVuetifyComponent,
  createReactComponent,
} from './builders'

const EXTENSION_NAME = 'jsm-generator'
const generateVue = commands.registerCommand(
  `${EXTENSION_NAME}.generateVue`,
  handleCreateVueComponent
)
const generateVuetify = commands.registerCommand(
  `${EXTENSION_NAME}.generateVuetify`,
  handleCreateVuetifyComponent
)
const generateReact = commands.registerCommand(
  `${EXTENSION_NAME}.generateReact`,
  handleCreateReactComponent
)

const generateReactJS = commands.registerCommand(
  `${EXTENSION_NAME}.generateReactJS`,
  handleCreateReactComponentJS
)
export function activate({ subscriptions }: ExtensionContext) {
  subscriptions.push(generateVuetify)
  subscriptions.push(generateVue)
  subscriptions.push(generateReact)
  subscriptions.push(generateReactJS)
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function deactivate() {}

async function handleCreateVueComponent({ path }: { path: string }) {
  const fileName = await window.showInputBox({
    title: 'Enter the name of the Vue Component',
    placeHolder: 'MyVueComponent',
  })
  if (path && fileName) {
    return await createVueComponent(path, fileName)
  }

  return window.showErrorMessage('Something went wrong!')
}
async function handleCreateVuetifyComponent({ path }: { path: string }) {
  const fileName = await window.showInputBox({
    title: 'Enter the name of the Vuetify Component without initial V',
    placeHolder: 'TextField (for VTextField)',
  })
  if (path && fileName) {
    return await createVuetifyComponent(path, fileName)
  }

  return window.showErrorMessage('Something went wrong!')
}

async function handleCreateReactComponent({ path }: { path: string }) {
  const fileName = await window.showInputBox({
    title: 'Enter the name of the React Component (TS)',
    placeHolder: 'MyReactComponent',
  })
  if (path && fileName) {
    return await createReactComponent(path, fileName)
  }

  return window.showErrorMessage('Something went wrong!')
}
async function handleCreateReactComponentJS({ path }: { path: string }) {
  const fileName = await window.showInputBox({
    title: 'Enter the name of the React Component (JS)',
    placeHolder: 'MyReactComponent',
  })
  if (path && fileName) {
    return await createReactComponent(path, fileName, true)
  }

  return window.showErrorMessage('Something went wrong!')
}
