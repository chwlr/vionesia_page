import { Button, Col } from 'react-bootstrap'
import styled from 'styled-components'

//
// const Button_styled = styled(Button)`
//   border-radius: 35px;
//   height: auto;
//   font-size: 15px;
//   padding: 3px 15px 3px 15px;
//   margin: 2px;
//   background-color: #343a40;
//   border-color: white;
//   &:hover {
//     background-color: #adb5bd;
//     border-color: white;
//   }
//   a {
//     text-decoration: none;
//     color: white;
//   }
// `
const Column_styled = styled(Col)`
    height: 350px;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
`


export { Column_styled }