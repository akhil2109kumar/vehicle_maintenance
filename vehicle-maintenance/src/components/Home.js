import React from 'react'
import pickup from '../assets/images/Pickup_Illustration.png'
import Footer from './Footer';
import VisitorForm from './Form'
import PageEnd from './pageEnd';
import SecondPage from './secondPage';

export default function Home() {
  return (
    <div className="main">
        <div className="section-top py-5 my-md-5">
            <div className="container">
                <div className="row text-center text-lg-start">
                <div className="col-12 col-lg-5">
                    <h1 className="fw-bold mb-4">Vehicle Maintenance From The Comfort of Your Home</h1>
                    <p className="fs-6 pb-4">Open auto Soothes the hessle of maintaining your vehicle and helps you deal with unexpected 
                    repairs worry-free.</p>
                    <VisitorForm />
                </div>
                <div className="col-md-12 col-lg-7">
                    <img src={pickup} className="w-100 mt-5 mt-lg-0" />
                </div>
                </div>
                <PageEnd />
            </div>
        </div>
        <SecondPage />
        <Footer />
    </div>
  
  )
}
