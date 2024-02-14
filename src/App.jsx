import React from 'react'

import { Navbar,  Location, About, Aman } from './components'
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
      <Location />
      <About />
      <Footer />
      <Aman />
    </div>
  )
}

export default App
