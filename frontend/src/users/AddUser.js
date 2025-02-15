import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {

    let navigate=useNavigate();

    const [user,setUser]=useState({
        name:"",
        username:"",
        email:""
    })

    const {name,username,email}=user;

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8081/user",user);
        navigate("/");

    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded pd-4 mt-2 shadow'>
                <h2 className='text-center'>Register User</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlfor="Name" className='form-label'>
                        Name
                    </label>
                    <input type='text' required className='form-control' placeholder='Enter your Name' name='name' value={name} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className='mb-3'>
                    <label htmlfor="Name" className='form-label'>
                        Username
                    </label>
                    <input type='text' required className='form-control' placeholder='Enter your UserName' name='username' value={username} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className='mb-3'>
                    <label htmlfor="Name" className='form-label'>
                        Email
                    </label>
                    <input type='text' required className='form-control' placeholder='Enter your Email' name='email' value={email} onChange={(e)=>onInputChange(e)}/>
                </div>
                <button type='submit' className='btn btn-outline-primary'>Submit</button>
                <Link to="/" className='btn btn-outline-danger mx-3'>Cancel</Link>
                </form>


            </div>
        </div>
    </div>
  )
}
