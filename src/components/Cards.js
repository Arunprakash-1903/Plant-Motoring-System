import React, { useState } from 'react'
import {db,ref,onValue} from "../firebase"
import { useEffect} from "react"
import Card from "./Card"
import "../styles/cards.css"

import Temperature from './Temperture'

const Cards = () => {
    const [data ,setData]=useState({})
    useEffect(() => {
        onValue(ref(db),snapshot=>{
          setData(snapshot.val())
        })
      
       
      }, [])
      
      
  return (
    <div className='cards__container'>
     {data && <Card  data={data}/>}
      {data&& <Temperature data={data}/>}
       
    </div>
  )
}

export default Cards