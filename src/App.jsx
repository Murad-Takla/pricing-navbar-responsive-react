
import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'

import Nav from './Components/Nav/Nav'
import PricingOption from './Components/PricingOptions/PricingOption'

function App() {



  return (
    <div >
      <nav className='bg-red-300' >
       <Nav></Nav>    
      </nav>
      <PricingOption></PricingOption>


    </div>

  )
}

export default App
