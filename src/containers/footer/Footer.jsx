import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import "./footer.css";

const Footer = () => (
  <footer className="app__footer section__padding">
    <div className="app__footer-links gradient__bg section__padding">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Kantipur Engineering Consult, Main Road, Sani Haat, Biratnagar-2</p>
        <p className="p__opensans">+977 9862500112</p>
        <p className="p__opensans">+977 9804046549</p>
        <p className="p__opensans">+977 9852066901</p>
        <p className="p__opensans">+977 9804375944</p>
      </div>

      <div className="app__footer-links_logo">
        <p className="p__opensans">Feel Free to Reach Us</p>
        <div className="app__footer-links_icons">
          <a href="https://www.facebook.com/brtkantipur" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="http://instagram.com" target="_blank" rel="noopener noreferrer" className="fab">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://api.whatsapp.com/send?phone=%2B9779852066901&data=ARB-Cbs9ydm1bI2fxeVkRCqilBBc6iAUzvma9CX49_iQIGYe1Vr0JhHrSrawJXfzIzm9o5v_gUVtb3P_Mjvg9nUwc7YyzSWClNDeKYXp2KX0p_Hfqgm0OCQDKah_LjmU_ZeoIc9dCpQzMea-X-q4hog2lQ&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR2GHXzgdqP2bxzpwBSO9qTelV8oDV1USW9bo14VgOTR7SZDZ3lUWNQ0NLk" target="_blank" rel="noopener noreferrer" className="fab">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Sunday - Friday: 08:00 am - 09:00 pm</p>
        <p className="p__opensans">Saturday: 10:00 am - 05:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">Kantipur Engineering Consult. All Rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
