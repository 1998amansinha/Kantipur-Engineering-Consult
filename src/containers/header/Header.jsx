import React from 'react'

import content from '../../assets/content.png'
import './header.css'

const Header = () => {
  return (
    <div className="kec__header section__padding" id='home'>
      <div className="kec__header-container gradient__bg section__padding">
        <div className="kec__header-container_content">

          <p className='p__header'>Welcome to Kantipur Engineering Consult</p>
          <h1 className='h__headtext'>Manage Your Property</h1>
          <p className='p__para'>Your will have everything nearby supermarket, buses , station, the carmen neighborhood, etc</p>

          <div className="kec__header-input">
            <input type="email" placeholder='Enter Your Email' />
            <button className='custom__button'>Ping Us</button>
          </div>

        </div>

        <div className="app__wrapper_img ">
          <img src={content} alt="content" />
        </div>

      </div>


    </div>
  )
}

export default Header
