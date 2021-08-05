import { Container, Button, Card, Col, Row } from 'react-bootstrap'
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
  margin: 0.5em;
  border: none;
  border-radius: 15px;
  background-color: white;
  filter: drop-shadow(0px 48px 120px rgba(29, 53, 87, 0.25));
`
const ColStyled = styled(Col)`
  background-image: url('/Flat color Modern Isometric Illustration design - Data Visualization.svg');
  background-size: 100px 100px;
  background-position: center;
  background-repeat: no-repeat;
`

const RowStyled = styled(Row)`
  /* background-image: url('/Flat color Modern Isometric Illustration design - Data Visualization.svg'); */
  background-size: 100vw 60vh;
  background-position: bottom;
  background-repeat: no-repeat;
`

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

const ShadowStyled = styled(Card)`
  border: none;
  border-radius: 35px;
  background-color: white;
  box-shadow: 0px 48px 120px rgba(50, 132, 255, 0.25);
  width: 100%;
`

export { Container_styled, ColStyled, RowStyled, Button_styled, Card_styled, ShadowStyled }