import { Container, Card, Button } from 'react-bootstrap'
import styled from 'styled-components'

const Container_styled = styled(Container)`
  /* background-image: url('/Flat color Modern Isometric Illustration design - Teamwork.svg'), ; */
  background-image: linear-gradient(to left, #6190e8, #a7bfe8);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 672px;
`
const Card_styled = styled(Card)`
  border: none;
`

const IcStyled = styled.img`
  margin: 0 0 0 0;
  padding: 10px;
  height: 50px;
`

const Button_styled = styled(Button)`
  border-radius: 35px;
  height: auto;
  font-size: 15px;
  padding: 3px 15px 3px 15px;
  margin: 2em 0 0 0;
`



export { Container_styled, IcStyled, Card_styled, Button_styled }