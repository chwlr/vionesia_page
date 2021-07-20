import { Container, Button, Card, Col } from 'react-bootstrap'
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
  margin: 1em 0 1em 0;
  padding: 0.2em 1em 0.2em 1em;
  border: 1px solid rgba(50, 132, 255, 0.25);
  border-radius: 35px;
  background-color: white;
  min-height: 160px;
  min-width: 400px;
`


export { Button_styled, Card_styled }