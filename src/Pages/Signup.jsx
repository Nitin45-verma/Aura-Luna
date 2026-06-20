import React from 'react'
import "../app.css";
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    return (
        <>
            <div className='container-fluid' >
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 imgcontent">
                        <img style={{ width: "100%", height: "100vh" }} src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaLw3iTaZYM-nXBlqdanq3GZrxj4_1eKjYYO2KKRPMjPBgPimZwaJGLyhDcsgaWHRPRwko44_pHnQ26w8yPnc0u_jRwONwO9NGuGIoF_DzZrMIkkU9sbI0z4bKJPb-WYnIYIw-ENSf6Fw0CBw16e2TZSJ65cm69uFYDi1rza0plJiLHk1SvkurKsnRZml2P6ujhpXwP4WNYW7vcv2aM-Dt6KCnfAGZAmF2cXfiRX35x6kiPyn4_bHGk_Hi1QQJPhBrdlE_M_9ldeg" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="card-body">
                            <form>
                                <h5 className="card-title">AURÆ LUNA</h5>
                                <div className="singup">
                                    <p>SING UP</p>
                                    <p>LOG IN </p>
                                </div>
                                <label className='label1'>Email address</label> <br />
                                <input className='input1' type="email" placeholder='jane.doe@studio.com' /><br />
                                <label className='label2'>Password</label> <br />
                                <input className='input2' type="password" placeholder='.....' />
                                <div className="d-flex justify-content-between mt-3">
                                    <div className='d-flex  gap-2'>
                                        <input type="checkbox" />
                                        <p className='mt-3'>Remember Me</p>
                                    </div>
                                    <u>Forgot?</u>
                                </div>

                                <div className='maincontentbtn'>
                                    <div className="child">
                                        <button className='btn1'>CREATE ACCOUNT</button>
                                        <button className='btn2' onClick={() => navigate('/profile')}>LOG IN</button>
                                    </div>
                                </div>
                                <div className='linecontent'>
                                    <div className="line"></div>
                                    <div className="content">or</div>
                                    <div className="line"></div>
                                </div>
                                <div className='mainnn'>
                                    <button className='btnlast'>Continue with Google</button>

                                </div>
                                <p className='lastp'>By creating an account, you agree to our Terms of Service</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Signup