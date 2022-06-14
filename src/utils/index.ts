import { window } from 'vscode'

export const createHandler = (
  title: string,
  placeHolder: string,
  generatorFunction: (
    path: string,
    fileName: string,
    js?: boolean
  ) => Promise<void>,
  isJs?: boolean
) => {
  return async function ({ path }: { path: string }) {
    const fileName = await window.showInputBox({
      title,
      placeHolder,
    })
    if (path && fileName) {
      return await generatorFunction(path, fileName, isJs)
    }

    return window.showErrorMessage('Something went wrong!')
  }
}
