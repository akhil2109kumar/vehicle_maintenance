import React from 'react'

export default function SuccessModal(props) {
    return (
        <div className="modal text-secondary success-modal" id="exampleModal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <button type="button"
                        className="btn-close ms-auto px-3 mt-3 small"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        onClick={props.onClick}></button>
                    <div className="modal-body mb-3">
                        <center><h5 className='success-text'>User registered successfully</h5></center>
                    </div>
                </div>
            </div>
        </div>
    )
}
