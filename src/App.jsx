import React from 'react'
import Clock from './components/Clock'
import Weather from './components/Weather'
import AnalogClock from './components/AnalogClock'

export default function App() {
  return (
    <div className='container min-h-screen flex flex-col items-center '>
      <AnalogClock/>
      <Clock/>
      <Weather/>
    </div>
  )
}
