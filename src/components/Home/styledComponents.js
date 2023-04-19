/* Write your CSS here */
import styled from 'styled-components/macro'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const HomeImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`
export const MobileHomeImage = styled.img`
  width: 80%;
  max-width: 450px;
  @media screen and (min-width: 767px) {
    display: none;
  }
`

export const DesktopHomeImage = styled.img`
  width: 100%;
  max-width: 1150px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
