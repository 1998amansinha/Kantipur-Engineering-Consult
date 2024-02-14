import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import "./aman.css";

const Footer = () => (
  <footer className="app__footer section__padding">
    <div className="footer__creator-info gradient__bg section__padding">
      <p className="p__opensans">Designed and developed by Aman Sinha</p>
      <p className="p__opensans">Contact me:</p>
      <div className="footer__creator-social">
        <a href="https://www.facebook.com/profile.php?id=100005724525910" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/amansinha796/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://api.whatsapp.com/send?phone=918083937600" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
