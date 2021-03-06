import React from 'react'
import {
  FooterStyled,
  FooterContent,
  ULsocial,
  FooterBottom,
  LinkStyled
} from './Footer.styled'
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

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
              <FontAwesomeIcon icon={faFacebook} className="i-tag" />
            </LinkStyled>
          </li>
          <li>
            <LinkStyled href="#">
              <FontAwesomeIcon icon={faTwitter} className="i-tag" />
            </LinkStyled>
          </li>
          <li>
            <LinkStyled href="#">
              <FontAwesomeIcon icon={faYoutube} className="i-tag" />
            </LinkStyled>
          </li>
          <li>
            <LinkStyled href="#">
              <FontAwesomeIcon icon={faInstagram} className="i-tag" />
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
