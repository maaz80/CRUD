import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import User from './components/User'
import CreateUser from './components/CreateUser'
import UpdateUser from './components/UpdateUser'
import Navbar from './components/Navbar'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
    <div className='poppins-regular'>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<User />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/create' element={<CreateUser />} />
          <Route path='/update/:id' element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
