import { Container } from 'react-bootstrap'
import styled from 'styled-components'

const Ncntsty = styled(Container)`
  position: 'relative';
  background: rgba(22, 26, 29, 0.9);
  padding: 10px 50px 10px 50px;
`

const IcStyled = styled.img`
  padding: 3px;
  height: 40px;
  margin-left: 5px;
  margin-right: 5px;
`
const BrandStyled = styled.img`
  padding: 3px;
  width: 100px;
  height: auto;
`

const NavStyle = styled.div`
  nav{
    height: 40px;
    @media (max-width: 977px) {
      height: auto;
    }
  }
  .navbar-light .navbar-nav .nav-link {
    color: white;
    font-weight: 400;
    margin: 0 15px 0 15px;
    &:hover{
      text-decoration: underline;
        }
    }
`

export { NavStyle, IcStyled, Ncntsty, BrandStyled }