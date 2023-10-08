import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { useParams } from 'react-router-dom'


const Card = () => {
    const[location,setLocation]=useState({})
    const[temp,settemp]=useState({})
    const[condition,setCondition]=useState({})

    

    if(!location){
        console.log('Loding....')
    }

    const {searchTerm}=useParams()

    const BASE_URL='https://weatherapi-com.p.rapidapi.com/forecast.json'

    const options = {
    url: BASE_URL,
    params: {q:`${searchTerm}`},
    headers: {
      'X-RapidAPI-Key': '49301d2a88mshe7b65f527437a25p184a9fjsn0f7d005f2590',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

    useEffect(()=>{
        axios.request(options).then(function (response) {
            setLocation(response.data.location);
            settemp(response.data.current)
            setCondition(response.data.current.condition)
          }).catch(function (error) {
            console.error(error);
          });
    },[searchTerm])


    return (

<div className=" w-full  h-80 flex items-center justify-center">
  <div className="bg-white p-8 bg-opacity-80 rounded-3xl flex space-x-12 items-center shadow-md">
    <div>
      <img src={condition.icon} alt="" />
      <p className="text-center text-gray-500 mt-2 text-sm">{condition.text}</p>
      </div>
    <div>
      <p className="text-7xl font-bold text-right text-gray-900">{temp.temp_c}°c</p>
      <p className="text-gray-500 text-sm">{location.name},{location.region}</p>
      <p className="text-gray-500 text-sm">{location.country} :: {location.localtime}</p>
    </div>
  </div>

  <div className="absolute bottom-2 text-white opacity-50 text-sm">
    Developed By Faizan Hussain
  </div>
</div>


    )
}
export default Card