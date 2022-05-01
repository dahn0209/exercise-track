import styled from 'styled-components'

export const Stylednavbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: coral;
  padding: 15px;

  h1 {
    color: white;
  }
`

export const StylednavLinks = styled.ul`
  list-style: none;

  li {
    display: inline-block;
    padding: 0px 15px;
    font-weight: bold;
  }

  .link {
    transition: all 0.3s ease 0s;
  }

  .link:hover {
    border-radius: 5px;
    background-color: yellow;
    color: green;
    cursor: pointer;
    transition: all 0.3s ease 0s;
  }
`
