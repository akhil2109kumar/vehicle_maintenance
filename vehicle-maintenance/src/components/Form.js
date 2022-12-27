import React from 'react'
import {useState} from 'react'
import axios from "axios";
import {API_URL} from '../constants'
import SuccessModal from './SuccessModal';

export default function VisitorForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    // const [success, setSuccess] = useState(false)
    const [showModal, setShowModal] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    }

    const validate = () => {
        if (name === '' || email==='') {
            setError('fields cannot be empty')
            return false
        }
        if (!isValidEmail(email)){
            setError('Please enter a valid email')
            return false
        }
        return true
    }

    const submitForm = () => {
        const data = {
            'name': name,
            'email': email
        }
        axios
            .post(
                API_URL,
                data
            )
            .then((res) => {
            if (res.status === 200) {
                setName('')
                setEmail('')
                setError('')
                setShowModal(true)

            } else Promise.reject();
            })
            .catch((err) => {
                console.log(err)
                setError(err)
            });
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(validate()) {
            submitForm()
        }
        
    };

    const handleClick = () => {
        setShowModal(false)
    }

  return (
    <div className="row">
        <div className="col-md-12 col-lg-9">
            { error && <div className='error'>{error}</div>}
            {showModal && <SuccessModal onClick={handleClick} />}

            <form>
                <div className="mb-3">
                    <input type="text" 
                        className="form-control bg-transparent rounded-pill"
                        id="exampleInputText" placeholder="Enter Your Name"
                        onChange={handleNameChange}
                        value={name}
                        required
                    />
                </div>
                <div className="mb-3">
                    <input type="email"
                        className="form-control bg-transparent rounded-pill"
                        id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Enter Your Email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <button type="submit"
                    className="btn btn-outline-secondary rounded-pill fw-bold w-100"
                    onClick={onSubmit}
                >
                    Submit
                </button>
            </form>
        </div>
    </div>
  )
}
