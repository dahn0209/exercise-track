import styled from 'styled-components'

export const StyledSection = styled.section`
  text-align: center;
  margin: 15px;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
`
export const StyledForm = styled.form`
  .new-input {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 10px;
    width: 100%;
  }
`
export const StyledInput = styled.input`
  padding: 10px;
  border-radius: 8px;
  margin-right: 10px;
  font-size: 1rem;
`
export const StyledButton = styled.button`
  border-radius: 8px;
  padding: 5px;
  background-color: rgb(22 163 74);
  color: white;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.4s;
`
