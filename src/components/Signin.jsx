import React from 'react'
import { useState } from 'react';
import axios from "axios"
const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [logged_in, set_logging] = useState(false)
    var data = [];
    const submitHandler = (event) => {
        event.preventDefault();
        axios.get(`http://localhost:8000/app/fetch/${username}`)
            .then((response) => {
                data = response.data
                console.log(data);
                data.map((item) => {
                    if (item.email === email && item.password === password) {
                        set_logging(true)
                    }
                    return item
                })
            })
    }
    const logout = () => {
        console.log(logged_in);
        set_logging(false);
        setEmail("");
        setPassword("");
        setUsername("")
    }
    return (
        <div className='container'>
            {logged_in ? <><p style={{ "paddingTop": "100px" }}>User you succesfully authorized</p>
                <p>Your username {username}</p>
                <p>Your password {password}</p>
                <p>If you want to log out click here</p>
                <button className="btn btn-danger" type='submit' onClick={() => logout()}>logout</button></> : <form style={{ "paddingTop": "100px" }} onSubmit={submitHandler}>
                <h1 className='mb-3'>SignIn Form</h1>
                <input type="text" className='form-control form-group mb-3' placeholder='Username' value={username} onChange={(e) => { setUsername(e.target.value) }} />
                <input type="text" className='form-control form-group mb-3' placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <input type="text" className='form-control form-group mb-3' placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <input type="submit" className='btn btn-danger btn-block' value='SignIn' />
            </form>}
        </div>
    )
}

export default Signin