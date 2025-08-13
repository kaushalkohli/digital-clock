import React, { useEffect, useState } from 'react';
import Clock from './Clock';
import Weather from './Weather';

export default function AnalogClock() {
  const [time, setTime] = useState(new Date());
  const [theme, setTheme] = useState('day')


  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const seconds = time.getSeconds() * 6;
  const minutes = time.getMinutes() * 6;
  const hours = time.getHours() * 30 + time.getMinutes() * 0.5;

  return (
    <div className={`w-96 h-96 rounded-full border-4 border-gray-800 relative mx-auto mt-8 ${theme === 'day' ? 'border-gray-800 bg-white':'border-gray-200 bg-gray-800 ' }`}>
      <div className="w-1 h-40 bg-black absolute left-1/2 -translate-x-1/2 bottom-1/2 origin-bottom"
           style={{ transform: `rotateZ(${hours}deg)` }}></div>
      <div className="w-1 h-44 bg-blue-600 absolute left-1/2 -translate-x-1/2 bottom-1/2 origin-bottom"
           style={{ transform: `rotateZ(${minutes}deg)` }}></div>
      <div className="w-0.5 h-44 bg-red-600 absolute left-1/2 -translate-x-1/2 bottom-1/2 origin-bottom"
           style={{ transform: `rotateZ(${seconds}deg)` }}></div>
      {[...Array(12)].map((_, i) => (
        <div key={i} className="absolute w-full h-full text-center"
             style={{ transform: `rotate(${i * 30}deg)` }}>
          <div className="w-1 h-3 bg-gray-800 mx-auto"></div>
        </div>
      ))}
      <div>
        <div className='absolute top-20 left-1/2 transform -translate-x-1/2'>
          <Weather  />
        </div>
        <div className="absolute top-55 text-center left-1/2 transform -translate-x-1/2 text-lg font-semibold">
        <Clock  />
        
        <button onClick={()=>setTheme(theme === 'day'?'night':'day')} >
          {theme}
        </button>
      </div>
      </div>
    </div>
  );
}
