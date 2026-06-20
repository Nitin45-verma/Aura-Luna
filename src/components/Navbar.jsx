import React from 'react'
import { NavLink } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

import '/src/App.css'

const Navbar = () => {
  return (
    <>
      <div className="logo">
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ height: "50px" }} >
          <div className="container">
            <a className="navbar-brand" href="#" style={{ fontSize: "32px", fontFamily: 'Hanken Grotesk' }}>AURÆ LUNA</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-4">
                <li >
                  <NavLink className="nav-link active" aria-current="page" to={'/'}>COLLECTION</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to={'/'}>DESIGNERS</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to={'/bespoke'}>BESPOKE</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to={'/'}>ABOUT</NavLink>
                </li>
                
              </ul>
              <form className="d-flex" role="search">
                <button className="btn" style={{ fontSize: "15PX" }} type="submit">CART <ShoppingCart /></button>
              </form>

              <button className='singup-buttton'><NavLink className="nav-link active" aria-current="page" to={'/signup'}>SING UP</NavLink></button>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar