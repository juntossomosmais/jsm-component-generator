import { commands } from 'vscode'

import {
  createVueComponent,
  createVuetifyComponent,
  createReactComponent,
} from './generators'
import { createHandler } from './utils'

const EXTENSION_NAME = 'jsm-generator'

export const generateVue = commands.registerCommand(
  `${EXTENSION_NAME}.generateVue`,
  createHandler(
    'Enter the name of the Vue Component',
    'MyVueComponent',
    createVueComponent
  )
)

export const generateVuetify = commands.registerCommand(
  `${EXTENSION_NAME}.generateVuetify`,
  createHandler(
    'Enter the name of the Vuetify Component without initial V',
    'TextField (for VTextField)',
    createVuetifyComponent
  )
)

export const generateReact = commands.registerCommand(
  `${EXTENSION_NAME}.generateReact`,
  createHandler(
    'Enter the name of the React Component (TS)',
    'MyReactComponent',
    createReactComponent
  )
)

export const generateReactJS = commands.registerCommand(
  `${EXTENSION_NAME}.generateReactJS`,
  createHandler(
    'Enter the name of the React Component (JS)',
    'MyReactComponent',
    createReactComponent
  )
)
