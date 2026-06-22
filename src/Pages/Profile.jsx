import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import "./Profile.css"
import lamp from "../assets/lamp.png";
import vase from "../assets/vase.png";
import Footer from '../components/Footer';



const Profile = () => {
  const [isOn, setIsOn] = useState(true);
  return (
    <>
    <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className=' member fade-up' >MEMBER PRIVATE VAULT</p>
            <h1 className='welcome fade-up delay-1'>WELCOME, ELEAONER</h1>
          </div>
        </div>
      </div>


      <div className="container-fluid min-vh-75 p-5" style={{ marginTop: "120px" }}>
        <div className="row">

          {/* Left Section */}
          <div className="col-lg-4 mb-5 fade-left">

            <h6 className="text-uppercase mb-5 identity">Identity</h6>

            <p className="text-uppercase text-secondary">Name</p>
            <h2 className="fw-normal mb-5">
              Eleanor Rothschild-Vance
            </h2>

            <p className="text-uppercase text-secondary">
              Member Status
            </p>
            <h3 className="fw-normal mb-5">
              Platinum Collector / Since 2022
            </h3>

            <button className="btn btn-outline-dark rounded-0">
              Edit Credentials →
            </button>

            <hr className="my-5" />

            <h6 className="text-uppercase mb-4">Security</h6>

            <div className="d-flex justify-content-between border-bottom py-3">
              <span>TWO-FACTOR AUTH</span>
              <span className="text-success fw-bold">
                ACTIVE
              </span>
            </div>

            <div className="d-flex justify-content-between border-bottom py-3">
              <span>ENCRYPTION KEY</span>
              <span>ⓘ</span>
            </div>

          </div>

          {/* Right Section */}
          <div className="col-lg-8 fade-right delay-1">

            <h6 className="text-uppercase mb-4" style={{ letterSpacing: "2px", fontStyle: "oblique" }}>
              Acquisitions Ledger
            </h6>

            <hr />

            {/* Order 1 */}
            <div className="row align-items-center py-4">

              <div className="col-12 col-md-2 text-center text-md-start mb-3 mb-md-0">
                {/* <div className="bg-secondary-subtle cbox"></div> */}
                <div><img src="https://img.magnific.com/premium-photo/png-circle-profile-picture-sticker-business-woman-transparent-background_53876-945863.jpg?semt=ais_hybrid&w=740&q=80" alt="" style={{ width: '100px' }} /></div>
              </div>

              <div className="col-md-5">
                <small className="text-secondary">
                  ORDER #AL-8829
                </small>

                <h3 className="fw-normal">
                  Sidero Marble Plinth
                </h3>
              </div>

              <div className="col-md-2 text-center">
                <small>DATE</small>
                <div>14 OCT 2023</div>
              </div>

              <div className="col-md-2 text-center">
                <small>STATUS</small>
                <div>DELIVERED</div>
              </div>

              <div className="col-md-1 text-end fs-2">
                ›
              </div>

            </div>

            <hr />

            {/* Order 2 */}
            <div className="row align-items-center py-4">
              <div className="col-12 col-md-2 text-center text-md-start mb-3 mb-md-0">
                {/* <div className="bg-secondary-subtle cbox"></div> */}
                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnFnmpnJ0eoAftiDC30y0mj9SaL99xG0-6_A&s" alt="" style={{ width: '100px' }} /></div>
              </div>

              <div className="col-md-5">
                <small className="text-secondary">
                  ORDER #AL-9012
                </small>

                <h3 className="fw-normal">
                  Aura Lounge Chair — Charcoal
                </h3>
              </div>

              <div className="col-md-2 text-center">
                <small>DATE</small>
                <div>02 Feb 2025</div>
              </div>

              <div className="col-md-2 text-center">
                <small>STATUS</small>
                <div>IN TRANSIT</div>
              </div>

              <div className="col-md-1 text-end fs-2">
                ›
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* #### */}
      <div className=" min-vh-100 p-3 p-md-4" style={{ marginTop: '50px' }}>
        <div className="container-fluid p-4 p-md-5">

          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-5">
            <p
              className="mb-0 text-uppercase"
              style={{ letterSpacing: "4px", fontSize: "14px" }}
            >
              Saved Curations
            </p>

            <p
              className="mb-0 text-uppercase"
              style={{ letterSpacing: "3px", fontSize: "12px" }}>
              View All Archive (12)
            </p>
          </div>

          <div className="row g-4">

            {/* Left Image */}
            <div className="col-lg-7 img-animation img-fade">
              <img
                src={lamp}
                alt=""
                className="img-fluid img-animation img-fade w-100"
              />
            </div>

            {/* Right Section */}
            <div className="col-lg-5 img-animation img-fade">

              <div className="position-relative">
                <img
                  src={vase}
                  alt=""
                  className="img-fluid img-animation img-fade w-100"
                  style={{ height: '700px' }}
                />

                <button
                  className="btn btn-light rounded-circle position-absolute top-0 end-0 m-3"
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                >
                  ♡
                </button>
              </div>

              <div className="border mt-4 p-4">

                <p
                  className="text-uppercase mb-3"
                  style={{
                    letterSpacing: "4px",
                    fontSize: "14px",
                  }}
                >
                  Curated Set: Monochrome Silence
                </p>

                <p
                  className="text-secondary fst-italic"
                  style={{
                    fontSize: "20px",
                  }}
                >
                  A selection of piece of reflecting
                  interplay of shadow and structure.
                </p>

                <button className="btn btn-outline-dark rounded-0 w-100 py-3 mt-4">
                  SHARE COLLECTIONS
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>



      <div
        className="container-fluid"
        style={{
          minHeight: "100vh",
          padding: "80px 90px",
        }}
      >

        <div className="col-xl-10 col-lg-11 preference-container">


          <div className="mb-5 pb-5">
            <p
              className="mb-0 text-uppercase"
              style={{
                letterSpacing: "4px",
                fontSize: "14px",
              }}
            >
              PERSONAL PREFERENCE
            </p>
          </div>


          <div className="row align-items-center preference-item">
            <div className="col-8">
              <h4
                style={{
                  letterSpacing: "3px",
                  fontWeight: "400",
                }}
              >
                PRIMARY SHIPPING
              </h4>

              <p
                className="mb-0"
                style={{
                  fontSize: "15px",
                }}
              >
                742 Avenue Montaigne, Paris, FR
              </p>
            </div>

            <div className="col-2 text-end">
              <a
                href="#"
                className="text-secondary"
                style={{
                  letterSpacing: "2px",
                }}
              >
                CHANGE
              </a>
            </div>

            <div className="col-2"></div>
          </div>

          <hr className="my-5" />



          <div className="row align-items-center preference-item">
            <div className="col-8">
              <h4
                style={{
                  letterSpacing: "3px",
                  fontWeight: "400",
                }}
              >
                VALUT COMMUNICATION
              </h4>

              <p
                className="mb-0"
                style={{
                  fontSize: "15px",
                }}
              >
                Receive curated invitation and private
                collection previewer.
              </p>
            </div>

            <div className="col-2 text-end">
              <div className="d-flex justify-content-end align-items-center gap-3">

                <span
                  className={!isOn ? "text-dark" : "text-secondary"}
                >
                  OFF
                </span>

                <div
                  className="border border-dark d-flex align-items-center p-1 toggle-box"
                  style={{
                    width: "70px",
                    height: "35px",
                    cursor: "pointer",
                  }}
                  onClick={() => setIsOn(!isOn)}
                >
                  <div
                    className="toggle-circle"
                    style={{
                      width: "20px",
                      height: "20px",
                      background: "black",
                      marginLeft: isOn ? "40px" : "0px"
                    }}
                  ></div>
                </div>

                <span
                  className={isOn ? "text-dark" : "text-secondary"}
                >
                  ON
                </span>

              </div>
            </div>

            <div className="col-2"></div>
          </div>

          <hr className="my-5" />


          <div className="row align-items-center preference-item">
            <div className="col-8">
              <h4
                style={{
                  letterSpacing: "3px",
                  fontWeight: "400",
                }}
              >
                PAYMENT SECURITY
              </h4>

              <p
                className="mb-0"
                style={{
                  fontSize: "15px",
                }}
              >
                Encrypted Vault Card - •••• 8821
              </p>
            </div>

            <div className="col-2 text-end">
              <a
                href="#"
                className="text-secondary"
                style={{
                  letterSpacing: "2px",
                }}
              >
                MANAGE
              </a>
            </div>

            <div className="col-2"></div>
          </div>

        </div>
      </div>
            <Footer />
    </>
  )
}

export default Profile