import { Col, Row } from 'react-bootstrap'
import styled from 'styled-components'

const Rowone = styled(Row)`
  width: 100%;
  margin: 10px 0 10px 0;
  padding: 0;

  @media screen and (max-width: 990px) {
    flex-direction: column;
  }
`

const Colstyled = styled(Col)`
  /* background-image: url('/image_1.png'); */
  background-color: white;
  background-size: cover;
  height: 100vh;
  max-width: 100%;
`

const Extra = styled.div`
  height: calc(45% - 9.1em);
  @media (max-width: 990px) {
    display: none;
  }
`

export { Colstyled, Rowone, Extra }