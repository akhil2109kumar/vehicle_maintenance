import React from 'react'
import logo from '../assets/images/OpenAuto_logo.png'

export default function Footer() {
    return (
        <footer className="py-5">
            <div className="container text-center text-md-start">
                <div className="d-block d-md-flex justify-content-between align-items-center mb-4">
                    <a className="navbar-brand" href="#">
                        <img src={logo} className="w-75 px-5 px-md-0 mb-3 mb-md-0" />
                    </a>
                    <nav className="navbar navbar-expand-lg">
                        <div className="navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav justify-content-center ms-auto mb-2 mb-lg-0 flex-row">
                                <li className="nav-item">
                                    <a className="nav-link p-0" aria-current="page" href="#"><i className="fa fa-phone me-2" aria-hidden="true"></i>
                                        +769 586 4558</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link p-0 ms-5" href="#"><i className="fa fa-envelope me-2" aria-hidden="true"></i>
                                        service@openauto.ca</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="d-block d-md-flex justify-content-between align-items-center">
                    <span>Open Auto @ all rights reserved.</span>
                    <div className="d-flex d-sm-none justify-content-center py-4">
                        <a className="text-decoration-none px-2" href="#">Privacy policy</a>
                        <a className="text-decoration-none px-2" href="#">Terms of use</a>
                        <a className="text-decoration-none px-2" href="#">Cookie policy</a>
                    </div>
                    <div className="text-center text-md-end">
                        <a href="#" className=""><i className="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="#" className="ps-3"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                        <a href="#" className="ps-3"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
                        <a href="#" className="ps-3"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                        <a href="#" className="ps-3"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </footer>

    )
}
