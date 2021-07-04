import styled from 'styled-components'
import { Button } from 'react-bootstrap'

const Stext = styled.small`
  font-size: 8px;
`

const Button_styled = styled(Button)`
  border-radius: 35px;
  height: auto;
  font-size: 15px;
  padding: 3px 15px 3px 15px;
  margin: 2px;
`

const IcStyled = styled.img`
  margin: 0 0.5em 1em 0;
  height: 30px;
`

export { Stext, Button_styled, IcStyled }