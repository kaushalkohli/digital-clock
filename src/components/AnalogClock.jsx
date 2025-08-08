import React, { useEffect, useState } from 'react';

export default function AnalogClock() {
  const [time, setTime] = useState(new Date());

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
    <div className="w-64 h-64 rounded-full border-4 border-gray-800 relative mx-auto mt-8">
      <div className="w-1 h-24 bg-black absolute left-1/2 -translate-x-1/2 bottom-1/2 origin-bottom"
           style={{ transform: `rotateZ(${hours}deg)` }}></div>
      <div className="w-1 h-32 bg-blue-600 absolute left-1/2 -translate-x-1/2 bottom-1/2 origin-bottom"
           style={{ transform: `rotateZ(${minutes}deg)` }}></div>
      <div className="w-0.5 h-32 bg-red-600 absolute left-1/2 -translate-x-1/2 bottom-1/2 origin-bottom"
           style={{ transform: `rotateZ(${seconds}deg)` }}></div>
      {[...Array(12)].map((_, i) => (
        <div key={i} className="absolute w-full h-full text-center"
             style={{ transform: `rotate(${i * 30}deg)` }}>
          <div className="w-1 h-3 bg-gray-800 mx-auto"></div>
        </div>
      ))}
      <div className="w-4 h-4 bg-black rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
}
