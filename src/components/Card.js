import React from 'react'
import { useEffect,useState } from 'react'
import "../styles/card.css"

const Card = ({data}) => {
    const [humidityV,setHumidityV]= useState(0)
    const [humidity,setHumidity]= useState(0)
    useEffect(() => {
        let c= 472-472*data?.values?.AirHumidity*0.01
       setHumidityV(c)
       setHumidity(data?.values?.AirHumidity)
    },[data])
    
    let r= document.querySelector(':root');
    r.style.setProperty('--humidity',humidityV) 


            
           
  

    
  return (
    <>
    <div className="card">
    <div className='card__container'>
        <div className="main">
        <div className="outer">
            <div className="inner">
                <div id="number">{humidity} {humidity &&<span>%</span>}</div>
              
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
        
            <linearGradient id="GradientColor">
               <stop offset="0%" stopColor="#32de84" />a
               <stop offset="100%" stopColor="#00AB66" />
            </linearGradient>
         </defs>
         
         <circle className='circle-h' cx="80" cy="80" r="70" strokeLinecap="round" />
 </svg>
    
    </div>
    </div>
    <p className='label'>Humidity</p>
    </div>
    </>
  )
}

export default Card