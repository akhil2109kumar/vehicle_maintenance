import React from 'react'

export default function PageEnd() {

  return (
    <div className="d-flex align-items-center">
        <div className="rounded-circle icon-updown flex-fill position-absolute start-0 end-0 text-center border mx-auto border-white d-none d-md-block">
            <a href="#sectionsecond">
                <i className="fa fa-chevron-down text-white" aria-hidden="true"></i>
            </a>
        </div>
        <div className="flex-fill text-center text-md-end mt-4 mt-md-0">
            <a href="#" className=""><i className="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="#" className="ps-3"><i className="fa fa-twitter" aria-hidden="true"></i></a>
            <a href="#" className="ps-3"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
            <a href="#" className="ps-3"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
            <a href="#" className="ps-3"><i className="fa fa-instagram" aria-hidden="true"></i></a>
        </div>
    </div>
  )
}
