import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

export default function Home() {

    const[users,setUsers]=useState([])
    const {id}=useParams();
    useEffect(()=>{
        loadUsers();
    },[]);

    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:8081/users")
        setUsers(result.data);
    }

    const deleteUser =async (id)=>{
        await axios.delete(`http://localhost:8081/user/${id}`)
        loadUsers()
    };

  return (
    <div className='conntainer'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope='col'>Action</th>
    </tr>
  </thead>
  <tbody>

    {
        users.map((user,index)=>(
            <tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>
        <Link to={`/viewuser`}className='btn btn-primary mx-2'>View</Link>
        <Link to={`/edituser/${user.id}`} className='btn btn-outline-primary mx-2'>Edit</Link>
        <Link className='btn btn-danger mx-2' onClick={()=>deleteUser(user.id)}>Delete</Link>

      </td>

    </tr>
        ))
    }
    
  </tbody>
</table>
        </div>
    </div>
  )
}
