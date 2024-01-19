import React from 'react'

import { Navbar, About, Location } from './components'
import { Features, Footer, Gallery, Header, Projects, Teams, } from './containers'

import './App.css';


const App = () => {
  return (
    <div>
        <Navbar />
      {/* <div className='gradient__bg'> */}
        <Header />
      {/* </div> */}
      <Features />
      <Projects />
      <Gallery />
      <Teams />
      {/* <div className="gradient__bg"> */}
        <Location />
        <About />
      {/* </div> */}
      <Footer />

    </div>
  )
}

export default App
