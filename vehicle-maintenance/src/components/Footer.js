import React from 'react'
import logo from '../assets/images/OpenAuto_logo.png'

export default function Footer() {
    return (
        <footer class="py-5">
            <div class="container text-center text-md-start">
                <div class="d-block d-md-flex justify-content-between align-items-center mb-4">
                    <a class="navbar-brand" href="#">
                        <img src={logo} class="w-75 px-5 px-md-0 mb-3 mb-md-0" />
                    </a>
                    <nav class="navbar navbar-expand-lg">
                        <div class="navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav justify-content-center ms-auto mb-2 mb-lg-0 flex-row">
                                <li class="nav-item">
                                    <a class="nav-link p-0" aria-current="page" href="#"><i class="fa fa-phone me-2" aria-hidden="true"></i>
                                        +769 586 4558</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link p-0 ms-5" href="#"><i class="fa fa-envelope me-2" aria-hidden="true"></i>
                                        service@openauto.ca</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div class="d-block d-md-flex justify-content-between align-items-center">
                    <span>Open Auto @ all rights reserved.</span>
                    <div class="d-flex d-sm-none justify-content-center py-4">
                        <a class="text-decoration-none px-2" href="#">Privacy policy</a>
                        <a class="text-decoration-none px-2" href="#">Terms of use</a>
                        <a class="text-decoration-none px-2" href="#">Cookie policy</a>
                    </div>
                    <div class="text-center text-md-end">
                        <a href="#" class=""><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="#" class="ps-3"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                        <a href="#" class="ps-3"><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
                        <a href="#" class="ps-3"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                        <a href="#" class="ps-3"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </footer>

    )
}
