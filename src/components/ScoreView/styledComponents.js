import styled from 'styled-components'

export const ScoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
  border: 2px solid #ffffff;
  border-radius: 10px;
  background-color: transparent;
  margin-top: 2%;
`

export const ScoreNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ScoreName = styled.h1`
  color: #ffffff;
  font-size: 20px;
  font-family: 'Bree Serif';
  margin-top: 0;
  margin-bottom: 0;
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`

export const ScoreBoard = styled(ScoreNameContainer)`
  background-color: white;
  width: 15%;
  height: 100%;
  border-radius: 10px;
  align-items: center;
  @media screen and (max-width: 576px) {
    width: 25%;
  }
`

export const ScoreHeading = styled.p`
  color: #223a5f;
  font-size: 20px;
  margin-bottom: 0px;
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`

export const ScoreResult = styled.p`
  color: #223a5f;
  font-size: 42px;
  margin-top: 0px;
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    font-size: 24px;
    margin-top: 10px;
  }
`
