import React, { useState } from 'react'

// For Burger Menu
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

// For Social Media Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

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
          <p><a href="#about">About</a></p>
          <p><a href="#services">Services</a></p>
          <p><a href="#projects">Projects</a></p>
          <p><a href="#gallery">Contact Us</a></p>
        </div>
        <div className="kec__navbar-links_social ">
          <a href="http://facebook.com"  >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="http://instagram.com" className='fab' >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="http://youtube.com" className='fab' >
            <FontAwesomeIcon icon={faYoutube} />
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
                <p><a href="#about">About</a></p>
                <p><a href="#services">Services</a></p>
                <p><a href="#projects">Projects</a></p>
                <p><a href="#gallery">Contact Us</a></p>
              </div>
              <div className="kec__navbar-menu_container-social ">
                <a href="http://facebook.com" >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="http://instagram.com" >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="http://youtube.com" >
                  <FontAwesomeIcon icon={faYoutube} />
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
