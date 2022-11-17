import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer>
      <ul className='socials'>
        <li className='social--links'><a href=""><FontAwesomeIcon icon={faTwitter}/></a></li>
        <li className='social--links'><a href=""><FontAwesomeIcon icon={faInstagram}/></a></li>
        <li className='social--links'><a href=""><FontAwesomeIcon icon={faGithub}/></a></li>
        <li className='social--links'><a href=""><FontAwesomeIcon icon={faFacebook}/></a></li>
      </ul>
      <p className='copyright'>Copyright ©{new Date().getFullYear()} All rights reserved</p>
    </footer>
  )
}
