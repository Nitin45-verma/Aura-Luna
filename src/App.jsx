import React, { createContext, useContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bespoke from './Pages/Bespoke';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Profile from './Pages/Profile';
import './index.css'
import About from './Pages/About';

const AdminContext = createContext()
const App = () => {
    const [login ,setlogin] = useState(false)
    return (
    <AdminContext.Provider value={{login,setlogin}}>
        <BrowserRouter >
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/bespoke' element={<Bespoke />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/about' element={<About />} />
                
            </Routes>
        </BrowserRouter>
        </AdminContext.Provider>
    )
}

export default App
export { AdminContext }