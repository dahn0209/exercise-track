import React from 'react'
import {Link} from 'react-router-dom'
import {HeroMain, SectionDivide, ButtonDiv} from './LandingPage.styled'

const LandingPage = () => {
  return (
    <HeroMain>
      {/* descroption section */}
      <SectionDivide className="section-divide">
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
      </SectionDivide>

      {/* image section */}
      <SectionDivide>
        <img alt="hero" src="./resized-exercise.jpeg" />
      </SectionDivide>
    </HeroMain>
  )
}

export default LandingPage
