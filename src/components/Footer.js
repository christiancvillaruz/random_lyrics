import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer className="footer">
      <p>Made with <FontAwesomeIcon icon={faHeart} /> by Christian</p>
      <ul className="footer-items">
        <li><a href="#"><FontAwesomeIcon icon={faGithub} /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
      </ul>
    </footer>
  )
}

export default Footer