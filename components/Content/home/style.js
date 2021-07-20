import { Container, Button, Card, Col } from 'react-bootstrap'
import styled from 'styled-components'

const Container_styled = styled(Container)`
  /* background-image: url('/Flat color Modern Isometric Illustration design - Teamwork.svg'), ; */
  background-image: linear-gradient(to left, #6190e8, #a7bfe8);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 672px;
`

const Discover_styled = styled(Container)`
  background-image: url('/Flat color Modern Isometric Illustration design - Data Visualization.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 30em 30em;
  height: 30em;
`

const Expertise_styled = styled(Container)`
  background-image: url('/Flat color Modern Isometric Illustration design - Data Analysis Expert.svg');
  background-position: 75% 80px;
  background-repeat: no-repeat;
  background-size: 30em 30em;
  height: 100%;
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

const Card_styled = styled(Card)`
  margin: 1em 0 1em 0;
  padding: 0.2em 1em 0.2em 1em;
  border: 1px solid rgba(50, 132, 255, 0.25);
  border-radius: 35px;
  background-color: white;
`

const Col_discover = styled(Col)`
  margin-top: 2em;
`

const Dicover_card = styled(Card)`
  border: none;
  border-radius: 35px;
  background-color: white;
  box-shadow: 0px 48px 120px rgba(50, 132, 255, 0.25);
`

const IcStyled = styled.img`
  margin: 3em;
  padding: 3px;
  height: 40px;
`


export { Container_styled, IcStyled, Button_styled, Card_styled, Discover_styled, Col_discover, Dicover_card, Expertise_styled }