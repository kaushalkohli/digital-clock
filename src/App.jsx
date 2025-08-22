import React from 'react'
import AnalogClock from './components/AnalogClock'
import Alarm from './components/Alarm'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Clock Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Main Clock Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
            <AnalogClock />
          </div>

          {/* Alarm Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
            <h2 className="text-xl font-semibold text-white mb-4">Alarm Settings</h2>
            <Alarm />
          </div>
        </div>

        {/* Additional Features Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Timer Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
            <h2 className="text-xl font-semibold text-white mb-4">Timer</h2>
            {/* Add Timer Component Here */}
          </div>

          {/* Stopwatch Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
            <h2 className="text-xl font-semibold text-white mb-4">Stopwatch</h2>
            {/* Add Stopwatch Component Here */}
          </div>

          {/* World Clock Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
            <h2 className="text-xl font-semibold text-white mb-4">World Clock</h2>
            {/* Add World Clock Component Here */}
          </div>
        </div>
      </div>
    </div>
  )
}