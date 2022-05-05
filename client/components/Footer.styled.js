import styled from 'styled-components'

export const FooterStyled = styled.footer`
  background-color: #26272b;
  height: auto;
  width: 100vw;
  padding-top: 15px;
  color: white;
  bottom: 0;
  position: absolute;
  left: 0;
  right: 0;
`
export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
    text-transform: capitalize;
    line-height: 3rem;
  }

  p {
    max-width: 500px;
    margin: auto;
    line-height: 28px;
    font-size: 14px;
  }
`

export const ULsocial = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0 3rem 0;

  li {
    margin: 0 10px;
  }
`
export const LinkStyled = styled.a`
  text-decoration: none;
  color: #fff;
  i {
    font-size: 1.1rem;
    transition: color 0.4s ease;
  }

  a:hover i {
    color: aqua;
  }
`
export const FooterBottom = styled.div`
  /* background:#000; */
  width: 100vw;
  padding: 10px 0;
  text-align: center;
  p {
    font-size: 14px;
    word-spacing: 2px;
    text-transform: capitalize;
  }
  span {
    text-transform: uppercase;
    opacity: 0.4;
    font-weight: 200;
  }
`
