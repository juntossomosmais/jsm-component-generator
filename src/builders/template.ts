export const toCamelCase = (name: string) => {
  name = name.charAt(0).toLowerCase() + name.slice(1)
  name = name.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase())

  return name
}

const templateBuilder = (name: string) => {
  const vars = new Map()
  vars.set('name', name)
  vars.set('camelCaseName', toCamelCase(name))
  vars.set('wrapperClassName', `${toCamelCase(name)}__wrapper`)
  return function (match: string, offset: string): string {
    const value = vars.get(offset)
    return value
  }
}

const literalRegex = /@(\w{1,})@/g
export const buildTemplate = (name: string, template: string) => {
  const replacer = templateBuilder(name)

  return template.replace(literalRegex, replacer)
}
