import styled from 'styled-components'

export const MainStyled = styled.main`
  color: black;
  margin: 10px;
`
export const HeaderStyled = styled.header`
  justify-content: center;
  align-items: center;
  text-align: center;
`
// export const StyledSection=styled.section`
// `

export const StyledListHeader = styled.header`
  h2 {
    text-align: center;
    margin-bottom: 15px;
  }
`

export const StyledPlanListCard = styled.div`
  display: flex;
  border: 2px solid gray;
  margin: 10px;
  padding: 5px;
  border-radius: 5px;

  .plan-box {
    justify-content: center;
    flex-wrap: wrap;
    display: flex;
    /* border:2px solid gray; */
    padding: 5px;
    flex: 1;
  }
`
export const StyledButton = styled.div`
  flex: 1;
  width: 100%;

  .edit-button {
    width: 50%;
    height: 50px;
  }

  #button-edit {
    width: 100%;
    height: 50px;
    border: 1px solid;
    color: white;
    background-color: rgb(22 163 74);
    border-radius: 10px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    outline: none;
  }

  #submit-button {
    width: 100%;
    height: 50px;
    border: 1px solid;
    color: white;
    background-color: rgb(22 163 74);
    border-radius: 10px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    outline: none;
  }
`
