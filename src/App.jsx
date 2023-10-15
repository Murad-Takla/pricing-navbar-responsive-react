
import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'

import Nav from './Components/Nav/Nav'
import PricingOption from './Components/PricingOptions/PricingOption'
import Charts from './Components/Charts'

function App() {



  return (
    <div >
      <nav className='bg-red-300' >
       <Nav></Nav>    
      </nav>
      <PricingOption></PricingOption>
      <Charts></Charts>

    </div>

  )
}

export default App
