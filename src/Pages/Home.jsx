import React from 'react'
import './Home.css'
import { MoveRight, Plus } from 'lucide-react';
import { motion } from "motion/react"


// images
import Heroimg from '../assets/Hall-sofa.jpg'
import chair from '../assets/Chair-1.jpg'
import MarbleTable from '../assets/Marble-Table.jpg'
import color1 from '../assets/color-4.png'
import color2 from '../assets/color-2.avif'
import color3 from '../assets/color-3.avif'
import color5 from '../assets/color-5.png'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


const Home = () => {
    return (
        <>
            <Navbar />
            {/* Hero section */}
            <motion.div
            
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1 }}
                className="top-main">
                <img className='top-image w-100' src={Heroimg} alt="" />
                <div className="text">
                    <p >Aethel Sofa</p>
                    <p style={{ fontSize: "20px", fontFamily: "-apple-system" }}>The curve of silence</p>

                </div>
                <div className=" text-center ">
                    <motion.button
                        animate={{ y: [0, -5, 0] }} transition={{ duration: 1, repeat: Infinity }}
                        className='top-button '>EXPLORE KANSO <MoveRight color="#000000" />
                    </motion.button>
                </div>

                <div className="plus">
                    <Plus />
                </div>

            </motion.div>
            {/* selected items */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="container-fluid " style={{ margin: "0px", padding: "0px" }} >
                <div className="row g-0" >
                    <div className="col-lg-4 col-md-4 col-sm-12 selected-item">
                        <img className='w-100 selectedImg' src={MarbleTable} alt="" />
                        <p>Lumen Marble Table</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 selected-item">
                        <img className='w-100 selectedImg' src={chair} alt="" />
                        <p>Serif Armchair</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 selected-item">
                        <div className="container-fluid" style={{ margin: "0px", padding: "0px" }}><div className="row">
                            <div className="col-4"><img src={color1} alt="" /></div>
                            <div className="col-4"><img src={color5} alt="" /></div>
                            <div className="col-4"><img src={color3} alt="" /></div>
                        </div></div>
                    </div>
                </div>
            </motion.div>

            {/* The Artisans */}
            <motion.div //for animation
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="container Artisans-container">
                <div className="row">
                    <div
                        className="col-lg-5 col-md-5  col-sm-12 Artisans-container1">
                        <div className="image"><img src={color1} alt="" />
                            <div className="disgner">
                                <p className='m-2 mt-3'>DESIGNER</p>
                                <p className='fs-4 m-2'>Julian Vance</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-0"></div>
                    <div className="col-lg-6 col-md-6 col-sm-12 Artisans-container2">
                        <p className='fs-1'>The Artisans</p>
                        <p className='Artosans-p2'>"Architectural silence is not the absence of sound, but the presence of intentional space. Each piece we create is a vessel for stillness."</p>

                        <p className='Artosans-p3 fs-5'>Julian Vance leads the creative direction of AURÆ LUNA, blending structural brutalism with the tactile softness of heritage materials. His philosophy centers on reducing noise to reveal the inherent soul of the object.</p>
                        <p className='Artosans-p4 fs-4'><u>READ THE NARRATIVE</u></p>
                    </div>
                </div>
            </motion.div>

            {/* Materiality */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="Materiality">
                <div className="container">
                    <div className='matheriality-top'><p className='fs-1'>MATERIALITY</p><p className='fs-5'>SELECTED TEXTURES</p></div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="row materiality mt-5">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="image2">
                                <img className='w-100' src={chair} alt="" />
                            </div>

                            <p className='mt-3'>ITALIAN bOUCLE</p>
                            <p>Hand-woven in Tuscany</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="image2  ">
                                <img className='w-100' src={color5} alt="" />
                            </div>
                            <p className='mt-3'>ITALIAN bOUCLE</p>
                            <p>Hand-woven in Tuscany</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="image2">
                                <img className='w-100' src={MarbleTable} alt="" />
                            </div>
                            <p className='mt-3'>ITALIAN bOUCLE</p>
                            <p>Hand-woven in Tuscany</p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>


            {/* Global */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="Global">
                <div className="container">
                    <div className="w-100 text-center">Global Sanctuarie</div>
                    <div className="row mt-5">
                        <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                            <p className='fs-1'> ZURICH</p>
                            <p>Bahnhofstrasse 12</p></div>
                        <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                            <p className='fs-1'> TOKYO</p>
                            <p>Omotesando Hills</p></div>
                        <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                            <p className='fs-1'> NEW YORK</p>
                            <p>Mercer Street</p></div>
                    </div>
                </div>
            </motion.div>

            {/* The Atelier */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="The-Atelier">
                <img className='w-100' src={Heroimg} alt="" />
                <div className="text-center">
                    <p>The Atelier</p>
                    <h6 >Every vision deserves a singular realization. Our master craftsmen collaborate with you to create heirloom pieces tailored to your architectural environment.</h6>
                    <motion.button
                        drag
                        animate={{ y: [0, -5, 0] }} transition={{ duration: 1, repeat: Infinity }}
                        className='Atelier-button'>INITIATE A PRIVATE COMMISSION</motion.button>
                </div>
            </motion.div>
            <Footer />
        </>
    )
}

export default Home