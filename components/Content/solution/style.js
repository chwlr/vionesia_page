import { Button, Card } from 'react-bootstrap'
import styled from 'styled-components'


const Button_styled = styled(Button)`
  border-radius: 35px;
  height: auto;
  font-size: 15px;
  padding: 3px 15px 3px 15px;
  margin: 2px;
  background-color: #343a40;
  border-color: white;
  &:hover {
    background-color: #adb5bd;
    border-color: white;
  }
  a {
    text-decoration: none;
    color: white;
  }
`

const Card_styled = styled(Card)`
  margin: 0.5em;
  border: none;
  border-radius: 15px;
  background-color: white;
  filter: drop-shadow(0px 48px 120px rgba(29, 53, 87, 0.25));
`


export { Button_styled, Card_styled }