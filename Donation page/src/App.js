import React from 'react'
import Fromleft from './component/Donation_Page/Fromleft'
import Fromright from './component/Donation_Page/Fromright'
import CounterLayout from './component/CounterBlock/CounterLayout'
import NumberCounter from './component/CounterBlock/NumberCounter'
import MiddleCard from './component/MiddleCard/MiddleCard'
import Support from './component/supportpage/Support'
import './App.css'



function App() {

  return (
  <div style={{overflow:"hidden"}}>
    <div className='mt-5 formdiv' >
    <center> <Fromleft/>    </center>
    <center className='fromright'><Fromright /></center>   
    
    </div>
    <NumberCounter/>
    <CounterLayout/>
    <MiddleCard/>
    <Support/>
  </div>
  )
}

export default App

