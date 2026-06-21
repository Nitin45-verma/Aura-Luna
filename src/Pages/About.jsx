import React from 'react'
import './About.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import image from '../assets/About-images/unnamed.png'
import img1 from '../assets/About-images/img.png'
import img2 from '../assets/About-images/imges.png'
import sideimges from '../assets/About-images/sideimg.png'
import img3 from '../assets/About-images/tree img.png'


const About = () => {
    return (
        <>
            <Navbar />
            <p className="main-text text-center">The Philosophy of Silence</p>
            <p className="text1 text-center">A study in architectural restraint</p>

            <div className=" text-center mt-5 ">
                <img className="imagesimg-fluid" src={image} alt="image" />
            </div>

            <div className="container mt-5">
                <div className="row align-items-center ">
                    {/* Text Side */}
                    <div className="col-lg-6 col-md-6 imgtext">
                        <p>01 / Narrative</p>
                        <h2>Our Origin</h2>

                        <p> Born from the intersection of monolithic architecture and wearable art, AURÆ LUNA was founded on the belief that true luxury requires no introduction. It is felt in the weight of It is felt in the weight of the silk, seen in the precision of a hidden seam, and experienced in the quiet confidence of a curated wardrobe.</p>

                        <p className="text-font">
                            Our journey began in a small atelier on the outskirts of Milan, where the goal was simple: to strip away the noise of the fashion industry and return to the purity of the silhouette. </p>

                    </div>
                    <div className="col-lg-6 col-md-6 text-center"   >
                        <img src={img1} className="img-fluid side-image" alt="fashion" />
                    </div>

                </div>
            </div>


            <div className="container py-5">

                <p className="fs-3">The Craft</p>

                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-12 text-center">
                        <img className="img-fluid imgbig" src={img2} alt="" />
                    </div>

                    <div className="col-lg-5 col-md-12 mt-4 mt-lg-0">

                        <img className="img-fluid sideimgsecond" src={sideimges} alt="" />

                        <div className="box mt-2">
                            <div className="textniche">
                                <p>Technique</p>
                                <p>Every piece is constructed using French</p>
                                <p>seams and hand-finished hems, ensuring the</p>
                                <p>interior is as beautiful as the exterior.</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div className="container-fluid bg-light py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-md-11 col-12 text-center">

                        <p> Responsibility </p>

                        <h1 className="display-5"> Sustainability as Standard </h1>

                        <p className="fs-5">
                            We do not believe in sustainable "collections." We believe in sustainable existence. Our production is limited to demand, our materials are circular, and our impact is measured in generations, not seasons. </p>
                    </div>
                </div>
            </div>

            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                        <hr />
                        <p className="fw-bold"> 01. Origin </p>
                        <p> Direct sourcing from heritage mills in Italy and Japan. </p>
                    </div>

                    <div className="col-lg-3 col-md-6 col-12">
                        <hr />
                        <p className="fw-bold"> 02. Waste </p>
                        <p> Zero-waste pattern cutting techniques employed in all core designs. </p>
                    </div>

                    <div className="col-lg-3 col-md-6 col-12">
                        <hr />
                        <p className="fw-bold">  03. People </p>
                        <p> Fair wages and safe environments for every artisan in our chain. </p>
                    </div>

                    <div className="col-lg-3 col-md-6 col-12">
                        <hr />
                        <p className="fw-bold"> 04. Longevity </p>
                        <p> A lifetime repair guarantee on all structured outerwear.
                        </p>
                    </div>
                </div>
            </div>
            <img className='fiximg w-100' src={img3} alt="" />
            <Footer />
        </>
    )
}

export default About
