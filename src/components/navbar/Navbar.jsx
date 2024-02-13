import React, { useState } from 'react'

// For Burger Menu
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

// For Social Media Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

// For logo image
import logo from '../../assets/logo.png'

// Importing css
import './navbar.css'

const Navbar = () => {

  // For toggling Burger Menu 
  const [toggleMenu, setToggleMenu] = useState(false)


  return (
    <div className="kec__navbar section__padding">
      <div className="kec__navbar-links gradient__bg">
        <div className="kec__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="kec__navbar-links_container ">
          <p><a href="#home">Home</a></p>
          <p><a href="#Features">Services</a></p>
          <p><a href="#projects">Projects</a></p>
          <p><a href="#location">Contact Us</a></p>
          <p><a href="#about">About</a></p>
        </div>
        <div className="kec__navbar-links_social ">
          <a href="https://www.facebook.com/brtkantipur"  >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="http://instagram.com" className='fab' >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://api.whatsapp.com/send?phone=%2B9779852066901&data=ARB-Cbs9ydm1bI2fxeVkRCqilBBc6iAUzvma9CX49_iQIGYe1Vr0JhHrSrawJXfzIzm9o5v_gUVtb3P_Mjvg9nUwc7YyzSWClNDeKYXp2KX0p_Hfqgm0OCQDKah_LjmU_ZeoIc9dCpQzMea-X-q4hog2lQ&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR2GHXzgdqP2bxzpwBSO9qTelV8oDV1USW9bo14VgOTR7SZDZ3lUWNQ0NLk" className='fab' >
          <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>

        <div className="kec__navbar-menu">
          {toggleMenu
            ? <RiCloseLine color="#000" size={30} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#000" size={30} onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
            <div className="kec__navbar-menu_container scale-up-center">
              <div className="kec__navbar-menu_container-links">
                <p><a href="#home">Home</a></p>
                <p><a href="#Features">Services</a></p>
                <p><a href="#projects">Projects</a></p>
                <p><a href="#gallery">Contact Us</a></p>
                <p><a href="#about">About</a></p>
              </div>
              <div className="kec__navbar-menu_container-social ">
                <a href="https://www.facebook.com/brtkantipur" >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="http://instagram.com" >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://api.whatsapp.com/send?phone=%2B9779852066901&data=ARB-Cbs9ydm1bI2fxeVkRCqilBBc6iAUzvma9CX49_iQIGYe1Vr0JhHrSrawJXfzIzm9o5v_gUVtb3P_Mjvg9nUwc7YyzSWClNDeKYXp2KX0p_Hfqgm0OCQDKah_LjmU_ZeoIc9dCpQzMea-X-q4hog2lQ&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR2GHXzgdqP2bxzpwBSO9qTelV8oDV1USW9bo14VgOTR7SZDZ3lUWNQ0NLk" >
                <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
