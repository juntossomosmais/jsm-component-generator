export const TEMPLATES = (name: string) => {
  return {
    index: `
import React from 'react'

const ${name} = () => {
  return (
<>
  ${name} component
</>
  )
}

export default ${name}`,
    style: `import styled from 'styled-components'

export const ${name}Wrapper = styled.div\`
\``,
    test: `import * as React from 'react'
import { render } from '@testing-library/react'
import ${name} from '..'

describe('${name}', () => {
  it('Should render the component', () => {
    const element = render(<${name} />)   
    expect(element.getByText('${name} component')).toBeInTheDocument()
  })
})
`,
  }
}
