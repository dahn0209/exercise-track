import styled from 'styled-components'

export const HeroMain = styled.main`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 80px;
  padding-bottom: 80px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-between;
  justify-content: space-between;
`

export const SectionDivide = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;
  align-items: center;
  text-align: center;
  /* flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0; */
  /* @media (min-width: 1024px) {
    flex-grow: 1;
    padding-right: 64px;
  }
  @media (min-width: 768px) {
    width: 50%;
    align-items: flex-start;
    text-align: left;
    margin-bottom: 0px;
  } */

  h1 {
    font-size: 30px;
    line-height: 36px;
    margin-bottom: 16px;
    font-weight: 500;
    /* color:black; */

    @media (min-width: 640px) {
      font-size: 36px;
      line-height: 40px;
    }
  }

  p {
    margin-bottom: 32px;
    line-height: 1.625;
  }

  img {
    position: relative;
    object-fit: contain;
    object-position: center;
    border-radius: 4px;
  }
`
export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;

  .sign-up {
    display: inline-flex;
    color: white;
    background-color: rgb(34 197 94);
    border-width: 0px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    padding-right: 8px;
    border-radius: 4px;
    font-size: 18px;
    line-height: 28px;
  }

  .sign-up:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  .sign-up:hover {
    background-color: rgb(22 163 74);
  }
`
