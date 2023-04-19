import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'

export const NavbarHeader = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: 0px 0px 0px 1px #dcdcdc;
`

export const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  padding-top: 20px;
  padding-bottom: 20px;
  max-width: 500px;
  @media screen and (min-width: 767px;) {
    padding-top: 28px;
    padding-bottom: 28px;
    max-width: 1100px;
  }
`

export const WebsiteLogo = styled.img`
  height: 36px;
  width: 36px;
  @media screen and (min-width: 767px;) {
    height: 56px;
    width: 56px;
  }
`

export const HamburgerIconButton = styled.button`
  background-color: transparent;
  width: 52px;
  height: 42px;
  border: none;
  outline: none;
  cursor: pointer;
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 500px;
  flex-grow: 1;
  @media screen and (min-width: 767px;) {
    max-width: 1100px;
  }
`

export const CloseButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  width: 36px;
  height: 36px;
  margin-top: 36px;
  border: none;
  outline: none;
  cursor: pointer;
`

export const NavLinksList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  padding-left: 0px;
`

export const NavLinkItem = styled.li`
  list-style-type: none;
`

export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1e293b;
  text-decoration: none;
  margin-bottom: 30px;
`

export const NavLinkContent = styled.p`
  font-size: 28px;
  font-family: 'Roboto';
  font-weight: 500;
  line-height: 1.2;
  margin: 0px;
  margin-top: 10px;
  @media screen and (min-width: 767px;) {
    font-size: 42px;
  }
`
