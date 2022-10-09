import React from 'react'
import {Link} from "react-router-dom"
import { useState } from 'react';
import axios from "axios"

const Signup = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const submitHandler = (event) => {
        event.preventDefault();
        const registered = {
            fullName: name,
            username: username,
            email: email,
            password: password
        }
        // registered goes to backend and backend sends it to mongodb
        axios.post("http://localhost:8000/app/signup",registered)
            .then(response=>console.log(response.data))
        
    }
    return (
        <div className='container'>
            <form style={{ "paddingTop": "100px" }} onSubmit={submitHandler}>
            <h1 className='mb-3'>SignUp Form</h1>
                <input type="text" className='form-control form-group mb-3' placeholder='Name' value={name} onChange={(e) => { setName(e.target.value) }} />
                <input type="text" className='form-control form-group mb-3' placeholder='Username' value={username} onChange={(e) => { setUsername(e.target.value) }} />
                <input type="text" className='form-control form-group mb-3' placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <input type="text" className='form-control form-group mb-3' placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <input type="submit" className='btn btn-danger btn-block' placeholder='Password' value='Submit' />
            </form>
            <p>or <Link to="/signin">Signin</Link></p>
        </div>
    )
}

export default Signup