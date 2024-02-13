import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Add this import
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import "./footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <div className="app__footer-links gradient__bg section__padding">

      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>

      <div className="app__footer-links_logo">
        <div className="app__footer-links_icons">
          <a href="https://www.facebook.com/brtkantipur">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="http://instagram.com" className="fab">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=%2B9779852066901&data=ARB-Cbs9ydm1bI2fxeVkRCqilBBc6iAUzvma9CX49_iQIGYe1Vr0JhHrSrawJXfzIzm9o5v_gUVtb3P_Mjvg9nUwc7YyzSWClNDeKYXp2KX0p_Hfqgm0OCQDKah_LjmU_ZeoIc9dCpQzMea-X-q4hog2lQ&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR2GHXzgdqP2bxzpwBSO9qTelV8oDV1USW9bo14VgOTR7SZDZ3lUWNQ0NLk"
            className="fab"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am -12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00am -11:00 pm</p>
      </div>

    </div>
      <div className="footer__copyright">
        <p className="p__opensans">
          2005 Kantipur Engineering Consult. All Rights reserved.
        </p>
      </div>
  </div>
);

export default Footer;
