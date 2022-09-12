import React from 'react'
import { useEffect,useState } from 'react'
import "../styles/card.css"

const Temperature= ({data}) => {
    const [tempV,settempV]= useState(0)
    const [temp,settemp]= useState(0)
    useEffect(() => {
        let c= 472-472*data?.values?.Temperature*0.01
       settempV(c)
       settemp(data?.values?.Temperature)
      
    },[data])
    
    let r= document.querySelector(':root');
    r.style.setProperty('--temp',tempV) 


            
           
  

    
  return (
    <>
    <div className="card">
    <div className='card__container'>
      <div className='main'>
        <div className="outer">
            <div className="inner">
                <div id="number">{temp} {temp &&<span>&#8451;</span>}</div>
                
               
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
        
            <linearGradient id="GradientColor">
               <stop offset="0%" stopColor="#e91e63" />
               <stop offset="100%" stopColor="#673ab7" />
            </linearGradient>
         </defs>
         <circle className='circle-t' cx="80" cy="80" r="70" strokeLinecap="round" />
 </svg>

</div>
    </div>
    <p className='label'>Temperature</p>
    </div>
    </>
  )
}

export default Temperature