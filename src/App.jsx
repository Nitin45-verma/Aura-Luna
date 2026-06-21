import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bespoke from './Pages/Bespoke';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Profile from './Pages/Profile';
import './index.css'
import About from './Pages/About';


const App = () => {
    return (
        <BrowserRouter >
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/bespoke' element={<Bespoke />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App