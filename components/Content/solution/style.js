import { Container, Card } from 'react-bootstrap'
import styled from 'styled-components'

const Container_styled = styled(Container)`
  /* background-image: url('/Flat color Modern Isometric Illustration design - Teamwork.svg'), ; */
  background-image: linear-gradient(to left, #6190e8, #a7bfe8);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 672px;
`

const Container_content = styled(Container)`
  background-size: 40em auto;
  background-position: right center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  height: 100%;
`

const ContainerCrm = styled(Container)`
  /* background: linear-gradient(to right, #50c9c3, #96deda);  */
  height: 100%;
`

const IcStyled = styled.img`
  margin: 1em;
  padding: 3px;
  height: 40px;
`

const CardStyled = styled(Card)`
  width: 300px;
  height: 400px;
  margin: 30px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    box-shadow: 0px 48px 120px rgba(50, 132, 255, 0.25);
  }
`



export { Container_styled, ContainerCrm, Container_content, IcStyled, CardStyled}