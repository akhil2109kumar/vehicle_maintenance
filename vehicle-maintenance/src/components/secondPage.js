import React from 'react'
import pickup from '../assets/images/picku_service.png'

export default function secondPage() {
  return (
    <div className="section-second py-5" id="sectionsecond">
      <div className="container my-0 my-md-5">
        <div className="row align-items-center text-center text-lg-start">
          <div className="col-md-12 col-lg-6 offset-lg-1 order-0 order-lg-2 mb-5 mb-lg-0">
            <h1 className="fw-bold mb-4">Focused on <br/>Time Saving</h1>
            <p className="pb-4 lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quas cupiditate magnam nam fugit, suscipit expedita
               adipisci repudiandae, voluptatibus tempora ratione excepturi deserunt aut, eum non. Et a sunt illum. Lorem ipsum dolor sit 
               amet consectetur adipisicing elit. Cum quas cupiditate magnam nam fugit, suscipit expedita adipisci repudiandae, voluptatibus
                tempora ratione excepturi deserunt aut, eum non. Et a sunt illum.
            </p>
            <button type="button" className="btn btn-outline-secondary rounded-pill">Download the mobile app</button>
          </div>
          <div className="col-md-12 col-lg-5">
            <img src={pickup} className="w-100" />
          </div>
        </div>
      </div>
    </div>
  )
}
