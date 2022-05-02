import { ExtensionContext } from 'vscode'

import {
  generateReact,
  generateReactJS,
  generateVue,
  generateVuetify,
} from './entries'

export function activate({ subscriptions }: ExtensionContext) {
  subscriptions.push(generateVuetify)
  subscriptions.push(generateVue)
  subscriptions.push(generateReact)
  subscriptions.push(generateReactJS)
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function deactivate() {}
