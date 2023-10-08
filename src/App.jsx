import React from 'react'

import NavBar from './Components/NavBar';
import Card from './Components/Card';
import Input from './Components/Input';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className='bg-gray-900  min-h-screen '>
        <NavBar />
        <h1 className="  text-center mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">Whats the Weather At Your -Place</h1>
        <Input/>
        <Routes>
          <Route path='/:searchTerm' exact element={<Card />}/>
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App