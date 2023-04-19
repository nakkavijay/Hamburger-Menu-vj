/* Write your CSS here */
import styled from 'styled-components/macro'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const NotFoundContent = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-height: 767px) {
    align-items: flex-start;
    margin-top: 40px;
  }
`

export const NotFoundImageContainer = styled.div`
flex-grow: 1;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  max-width:1100px;
  width:90%;
  @media screen and (min-height: 767px) {
    max-width:520px;
    margin-top: 40px;
`

export const NotFoundImage = styled.img`
  width: 360px;
  @media screen and (min-height: 767px) {
    width: 420px;
  }
`

export const NotFoundHeading = styled.h1`
  color: #334155;
  font-size: 28px;
  font-family: 'Roboto';
  font-weight: 600px;
  line-height: 1.5;
  margin: 0px;
  margin-top: 10px;
  @media screen and (min-height: 767px) {
    font-size: 42px;
    font-weight: 500px;
    line-height: 1.3;
  }
`

export const NotFoundDescription = styled.p`
  text-align: center;
  color: #64748b;
  font-size: 16px;
  font-family: 'Roboto';
  line-height: 1.3;
  width: 250px;
  margin-top: 20px;
  @media screen and (min-height: 767px) {
    font-size: 20px;
    font-weight: 500px;
    line-height: 1.5;
  }
`
