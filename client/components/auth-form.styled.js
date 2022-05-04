import styled from 'styled-components'

export const StyledWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background: white;
  border: 5px solid black;
  border-radius: 10px;
`

export const TitleDiv = styled.h1`
  text-align: center;
  padding: 0 0 20px 0;
  border-bottom: 1px solid silver;
`

export const FormStyled = styled.form`
  padding: 0 40px;
  /* padding:40px; */
  box-sizing: border-box;
`

export const EachLabelDiv = styled.div`
  position: relative;
  border-bottom: 2px solid #adadad;
  margin: 30px 0;

  input {
    width: 100%;
    padding: 0 5px;
    height: 40px;
    font-size: 14px;
    border: none;
    background: none;
    outline: none;
  }

  label {
    position: absolute;
    top: 50%;
    left: 5px;
    color: #adadad;
    transform: translateY(-50%);
    font-size: 14px;
    pointer-events: none;
    transition: 0.5s;
  }

  span::before {
    content: '';
    position: absolute;
    top: 40px;
    left: 0;
    width: 0%;
    height: 2px;
    background: grey;
    transition: 0.5s;
  }

  input:focus ~ label,
  input:valid ~ label {
    top: -5px;
    color: grey;
  }

  input:focus ~ span::before,
  input:valid ~ span::before {
    width: 100%;
  }
`

export const PassDiv = styled.div`
  margin: -5px 0 20px 5px;
  color: #a6a6a6;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`

export const ButtonStyled = styled.button`
  width: 100%;
  height: 50px;
  border: 1px solid;
  color: white;
  background-color: rgb(22 163 74);
  border-radius: 25px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  outline: none;

  :hover {
    border-color: rgb(22 163 74);
    transition: 0.5s;
  }
`

export const SignupLinkDiv = styled.div`
  margin: 30px 0;
  text-align: center;
  font-size: 14px;
  color: #666666;

  .sign-up {
    color: #2691d9;
    text-decoration: none;
  }

  .sign-up:hover {
    text-decoration: underline;
  }
`
