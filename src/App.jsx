import { useState } from 'react'
import './index.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import InfoOne from './Components/infoOne'
import InfoTwo from './Components/InfoTwo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <InfoOne/>
      <InfoTwo/>
    </>
  )
}

export default App
