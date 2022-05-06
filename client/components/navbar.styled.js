import styled from 'styled-components'

export const Stylednavbar = styled.header`
  top: 0px;
  z-index: 10;
  background-color: rgb(31 41 55);
  border-radius: 20px;
  width: 100%;

  @media (min-width: 768px) {
    position: sticky;
  }
`

export const ContainerNavBar = styled.div`
  color: rgb(156 163 175);
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
  flex-wrap: wrap;
  padding: 20px;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
  .title {
    font-weight: 500;
    color: white;
    margin-bottom: 16px;
    margin-left: 12px;
    font-size: 20px;
    line-height: 28px;
    @media (min-width: 768px) {
      margin-bottom: 0;
    }
  }
`
export const StyledNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 1rem; /* 16px */
  line-height: 1.5rem; /* 24px */
  justify-content: center;
  @media (min-width: 768px) {
    margin-right: auto;
    margin-left: 16px;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 16px;
    border-left-width: 1px;
    border-color: rgb(75 85 99);
  }
  .link {
    color: grey;
    margin-right: 20px;
  }
  .link:hover {
    color: white;
  }
  .landlink {
    display: inline-flex;
    align-items: center;
    background-color: rgb(75 85 99);
    border-width: 0;
    padding-top: 0.25rem; /* 4px */
    padding-bottom: 0.25rem; /* 4px */
    padding-left: 0.75rem; /* 12px */
    padding-right: 0.75rem; /* 12px */
    border-radius: 0.25rem; /* 4px */
    font-size: 1rem; /* 16px */
    line-height: 1.5rem; /* 24px */
    margin-top: 1rem; /* 16px */
    @media (min-width: 768px) {
      margin-top: 0px;
    }
  }

  .land-link:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  .land-link:hover {
    background-color: rgb(156 163 175);
    color: white;
  }

  h3 {
    color: rgb(209 213 219);
  }
`
