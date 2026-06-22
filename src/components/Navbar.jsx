import React, { useContext } from 'react'
import { motion } from "motion/react"
import { NavLink, useNavigate } from 'react-router-dom';
import { CircleUserRound, ShoppingCart } from 'lucide-react';

import '/src/App.css'
import { AdminContext } from '../App';

const Navbar = () => {
  const { login } = useContext(AdminContext)

  const navigate = useNavigate()
  const loginBtn = login ? <CircleUserRound /> : "Sign Up"
  const islogin = login ? '/profile' : '/signup'

  const loginhandle = (e) => {
    e.preventDefault()
    navigate(islogin)
  }



  return (
    <>
      <div style={{ position: "sticky", top: "0px", zIndex: "10" }} >
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ display: "block" }}>
          <div className="container">
            <a className="navbar-brand" href="#" style={{ fontSize: "32px", fontFamily: 'Hanken Grotesk' }}>AURÆ LUNA</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-4">
                <li >
                  <NavLink className="nav-link active" aria-current="page" to={'/'}>
                    <motion.b whileHover={{ color: "#1d4ed8" }} transition={{duration:0.7}}>
                      COLLECTION</motion.b></NavLink>
                </li>
                <li >
                  <NavLink className="nav-link active" aria-current="page" to={'/'}>
                    <motion.b whileHover={{ color: "#1d4ed8" }} transition={{duration:0.7}}>
                      DESIGNERS</motion.b></NavLink>
                </li>
                <li >
                  <NavLink className="nav-link active" aria-current="page" to={'/bespoke'}>
                    <motion.b whileHover={{ color: "#1d4ed8" }} transition={{duration:0.7}}>
                      BESPOKE</motion.b></NavLink>
                </li>
                <li >
                  <NavLink className="nav-link active" aria-current="page" to={'/about'}>
                    <motion.b whileHover={{ color: "#1d4ed8" }} transition={{duration:0.7}}>
                      About</motion.b></NavLink>
                </li>
                
              </ul>
              <form className="d-flex" role="search">
                <motion.button 
                whileHover={{ color: "#1d4ed8" }} transition={{duration:0.7}}
                 className="btn" style={{ fontSize: "15px" }} type="button"><b><ShoppingCart /></b></motion.button>
              </form>

              <motion.button 
                whileHover={{ color: "#1d4ed8" }} transition={{duration:0.7}}
                 className='singup-buttton' onClick={loginhandle}>
                <b>{loginBtn}</b>
              </motion.button>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar