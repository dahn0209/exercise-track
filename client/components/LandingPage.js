import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import {HeroMain, SectionOne, ButtonDiv} from './LandingPage.styled'

const LandingPage = () => {
  return (
    <HeroMain>
      {/* descroption section */}
      <SectionOne>
        <h1>
          Get Healthy with <br />
          <em>Exercise-Track</em>
          <br />
        </h1>
        <p>
          Exercise-Track is a workout management tool that empowers individuals
          to stay healthy.
        </p>
        <ButtonDiv>
          <Link to="/signup" className="sign-up">
            Sign Up
          </Link>
        </ButtonDiv>
      </SectionOne>

      {/* image section */}
      <section>
        {/* <img/> */}
        <h1>DEEEEEEE</h1>
      </section>
      <footer />
    </HeroMain>
  )
}

export default LandingPage
