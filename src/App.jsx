import React from 'react'
import Clock from './components/Clock'
import Weather from './components/Weather'

export default function App() {
  return (
    <div className='container min-h-screen '>
      <Clock/>
      <Weather/>
    </div>
  )
}
