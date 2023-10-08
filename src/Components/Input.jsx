import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Input = () => {
  const[inputChange,setInputChange]=useState("")

  const navigate=useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();

    if(inputChange){
      navigate(`/${inputChange}`)
    }
    setInputChange(' ')
  }

  return (
    <form className="flex items-center" onSubmit={handleSubmit}>   
    <div className="relative w-86 flex m-auto  top-7">
        <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."
         value={inputChange}  onChange={(e)=>{setInputChange(e.target.value)}} required/>
        <button type="submit" className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
           >
        Search
    </button>
    </div>
</form>

  )
}

export default Input