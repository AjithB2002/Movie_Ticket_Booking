import React from 'react'
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import movielogo from '../assets/movie logo.png';
import { faFacebook, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
function Footer() {
    return (
        <>
            <div id='Footer'>
                <div className="container">


                    <div className="row">
                        <div className="col-md-6 text-md-start">
                            <div className='d-flex pt-4'>
                                <div><img src={movielogo} className="logo" alt="Logo" width="35px" height="auto" /></div>
                                <div><p className="logoname">BL MOVIES</p></div>
                            </div>
                        </div>
                        <div className="col-md-6 text-md-end ">
                            <ul className="list-inline pt-4">
                                <li className="list-inline-item"><div className='socaialiconspadding'><a className="fs-3 px-2 socaialicons" href="" target="blank"><FontAwesomeIcon icon={faInstagram} /></a></div></li>
                                <li className="list-inline-item"><div className='socaialiconspadding'><a className=" fs-3 px-2 socaialicons" href="" target="blank"><FontAwesomeIcon icon={faFacebook} /></a></div></li>
                                <li className="list-inline-item"><div className='socaialiconspadding'><a className=" fs-3 px-2 socaialicons" href="" target="blank"><FontAwesomeIcon icon={faTwitter} /></a></div></li>
                                <li className="list-inline-item"><div className='socaialiconspadding'><a className=" fs-3 px-2 socaialicons" href="" target="blank"><FontAwesomeIcon icon={faPinterest} /></a></div></li>
                            </ul>
                        </div>
                    </div>
                    <hr className="new4"></hr>




                    <div className="row py-3">
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="card cardfooter border-0">
                                <div className="card-body">
                                    <p className=" footerheading">DIRECTORY</p>
                                    <p className="h5 text-light">Buy movie tickets easily with BL Movies Ticket Booking nationwide</p>
                                    <a href="#" className="btn footerbtn mt-3">Get Your Ticket </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="card cardfooter border-0">
                                <div className="card-body">
                                    <p className=" footerheading">Movies</p>
                                    <div><a href="" className='sublinks'>Action</a></div>
                                    <div><a href="" className='sublinks' >Adventure</a></div>
                                    <div><a href="" className='sublinks' >Animation</a></div>
                                    <div><a href="" className='sublinks' >Comedy</a></div>
                                    <div><a href="" className='sublinks' >Crime</a></div>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="card cardfooter border-0">
                                <div className="card-body">
                                    <p className=" footerheading">Links</p>
                                    <div><a href="" className='sublinks' >About</a></div>
                                    <div><a href="" className='sublinks' >My account</a></div>
                                    <div><a href="" className='sublinks' >News</a></div>
                                    <div><a href="" className='sublinks' >Contact</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="card cardfooter border-0">
                                <div className="card-body">
                                    <p className=" footerheading">NewsLetter</p>
                                    <p className="text-secondary">Subscribe to BL Movies newsletter this very day.</p>
                                    <form action="#" id="newsletter-form">
                                        <div className="input-group mb-3">
                                            <input className="form-control border-end-0" type="email" placeholder="Your Email Address" aria-label="Your Email Address" />
                                            <button className="btn btn-outline-dark btn-info border-start-0" type="submit"> submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* -------------------- */}
                <div className='copyright pt-4 pb-4'>
                    <p className='mb-0 text-center'>@ Copyright 2023 by BL Groups</p>
                </div>
                {/* -------------------- */}
            </div>
        </>

    )
}

export default Footer;