export const TEMPLATES = {
  index: `import React from 'react'
import * as S from './styles'
  
const @name@ = () => {
  return (
    <S.Wrapper data-testid="@camelCaseName@" data-gtm="@camelCaseName@">
      @name@ component
    </S.Wrapper>
  )
}
  
export default @name@`,

  style: `import styled from 'styled-components'

export const Wrapper = styled.div\`
\``,
  test: `import React from 'react'
import { render, screen } from '@testing-library/react'
import @name@ from '.'

describe('<@name@ />', () => {
  it('should render the component', () => {
    render(<@name@ />)

    expect(screen.getByTestId("@camelCaseName@")).toBeInTheDocument()
  })
})
  `,
}
