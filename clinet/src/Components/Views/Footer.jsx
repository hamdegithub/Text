import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Importing Images
import logo2 from '../Resources/logo2.png';

const Footer = () => {
  return (
    <footer className='footer mt-5'>
        <nav className="footer-wrapper">
            <div className="footer-top">
                <div className="container">
                    <div className="footer-bottom-content clearfix">
                        <div className="row ps-5">
                            <div className="col-lg-4 col-md-4 ps-4">
                                <div className="logo-footer">
                                    <div className="navbar-brand">
                                        <Link to="/" className="text-decoration-none text-black"><img src={logo2} alt="Evangadi Logo" className='padding' /></Link>
                                    </div>
                                </div>
                                <ul className="footer-social-list lists list-inline d-flex ms-4">
                                    <li>
                                        <Link to="/"><button className="btn py-0 border fw-bolder rounded-5 text-white"><FacebookIcon /></button></Link>
                                    </li>
                                    <li>
                                        <Link to="/" className='mx-4'><button className="btn py-0 border fw-bolder text-white"><InstagramIcon /></button></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><button className="btn py-0 border fw-bolder rounded-5 text-white"><LinkedInIcon /></button></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="link-list list-inline">
                                <p className="fs-5 paddingl fw-bold text-white pb-0">UseFul Links</p>
                            
                            
                                <ul className="d-block pt-0 psm-5 list-none area">
                                    <li>
                                        <Link to="/" className='text-decoration-none list-none sub'>How it Works</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className='text-decoration-none list-none sub my-2'>Terms Service</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className='text-decoration-none list-none sub'>Privacy policy</Link>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="link-list list-inline">
                                <p className="fs-5 paddingl fw-bold text-white pb-0">Contact Info</p>
                            
                            
                                <ul className="d-block pt-0 psm-5 list-none area">
                                    <li>
                                        <Link to="/" className='text-decoration-none list-none sub'>Evangadi Network</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className='text-decoration-none list-none sub my-2'>suport@gmail.com</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className='text-decoration-none list-none sub'>+1-202-386-2702</Link>
                                    </li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </footer>
  )
}

export default Footer