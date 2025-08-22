import React, { useEffect, useState } from 'react'

export default function Alarm() {
    const [alarm, setAlarm] = useState('');
    const [isAlarmActive, setIsAlarmActive] = useState(false);
    const [time, setTime] = useState(new Date());

    // Update time every second
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const checkAlarm = () => {
        const currentTime = time.toLocaleTimeString('en-IN', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit'
        });

        if (alarm === currentTime && isAlarmActive) {
            alert('Alarm!');
            setIsAlarmActive(false);
        }
    };

    useEffect(() => {
        checkAlarm();
    }, [time, alarm, isAlarmActive]);

    return (
        <div className="flex flex-col items-center gap-2">
            {/* Display current time */}
            <div className="text-xl font-bold">
                {time.toLocaleTimeString('en-IN', {
                    hour12: false,
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                })}
            </div>
            
            <div className='mt-2'>
                <input 
                    type="time" 
                    value={alarm} 
                    onChange={(e) => setAlarm(e.target.value)} 
                    className='p-1 rounded text-sm'
                />
                <button 
                    onClick={() => setIsAlarmActive(!isAlarmActive)} 
                    className={`ml-2 px-2 py-1 rounded text-sm ${
                        isAlarmActive ? 'bg-red-500': 'bg-green-500'
                    } text-white`}
                >
                    {isAlarmActive ? 'Disable' : 'Set'} Alarm
                </button>
            </div>
            
            {/* Show set alarm time if active */}
            {isAlarmActive && (
                <div className="text-sm text-green-600">
                    Alarm set for: {alarm}
                </div>
            )}
        </div>
    )
}
