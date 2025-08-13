import React from 'react'
import { useEffect, useState } from 'react'

export default function Weather() {

    const[data, setdata] = useState(null)
    const[lat, setlat] = useState("")
    const[lon, setlon] = useState("") 

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            const {latitude, longitude} = position.coords
            setlat(latitude);
            setlon(longitude);

        },(err)=>{
            console.log(err)
        })
    },[])

    useEffect(()=>{
        if(lat && lon){
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f657a13cbff7ddc4b9aeb5430ecab386`)
            .then((res)=> res.json())
            .then((res)=> {
                setdata(res)
            })
            .catch(err => console.lon(err))
        }
    },[lat, lon])

  return (
    <div className='text-center'>
        {data && data.main && (
            
            <p>Weather<br />{data.weather[0].description} : {Math.round(data.main.temp - 273)} <sup>0</sup>C</p>
        )}
    </div>
  )
}
