import React from 'react'
// import {Link} from 'react-router-dom'
import {
  FooterStyled,
  FooterContent,
  ULsocial,
  FooterBottom,
  LinkStyled
} from './Footer.styled'

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContent className="footer-content">
        <h3>Exercise-Track</h3>
        <p>
          Minim fugiat non sint proident pariatur ea consequat aliqua eiusmod.
        </p>

        <ULsocial className="socials">
          <li>
            <LinkStyled href="#">
              <i className="fa fa-facebook" />
            </LinkStyled>
          </li>
          <li>
            <LinkStyled href="#">
              <i className="fa fa-twitter" />
            </LinkStyled>
          </li>
          <li>
            <LinkStyled href="#">
              <i className="fa fa-google-plus" />
            </LinkStyled>
          </li>
          <li>
            <LinkStyled href="#">
              <i className="fa fa-youtube" />
            </LinkStyled>
          </li>
          <li>
            <LinkStyled href="#">
              <i className="fa fa-linkedin-square" />
            </LinkStyled>
          </li>
        </ULsocial>
        <FooterBottom className="footer-bottom">
          <p>
            Copyright &copy;2022 Exercise-Track. Desigined by{' '}
            <span>David Ahn</span>
          </p>
        </FooterBottom>
      </FooterContent>
    </FooterStyled>
  )
}

export default Footer
