import React from 'react'

import { Navbar,  Location, About } from './components'
import { Features, Footer, Gallery, Header, Projects} from './containers'

import './App.css';


const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Features />
      <Projects />
      <Gallery />
      {/* <Teams /> */}
      <Location />
      <About />
      <Footer />

    </div>
  )
}

export default App
