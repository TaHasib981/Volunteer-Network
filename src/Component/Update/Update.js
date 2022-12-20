import React from 'react'
import './Update.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'

const Update = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
   const handleupdate = (e) =>{
    const name =e.target.name.value 
    const address = e.target.address.value 
    const number = e.target.number.value 
    const updatedUser = { name, address, number}
    const url = `http://localhost:5000/services/${id}`
    fetch(url, {
        method: 'PUT',
        body: JSON.stringify(updatedUser),
        headers:{
            'Content-Type' : 'application/json'
        },
    })
    .then(res => res.json())
    .then(data => console.log(data))
   }
    return (
        <div className='updateContainer'>
            <h3>Updating : _ </h3>
            <h5>Name : {user.name} </h5>
            <h5>Address: {user.address} </h5>
            <h5>phone : {user.phone} </h5>
            <h5>number : {user.number} </h5>
            <h5>ID : {user._id} </h5>
            <div>
                <form  onSubmit={handleupdate} className='d-flex flex-column'>
                    <input type='text' placeholder='name' name='name' required />
                    <input type='text' placeholder='address' name='address' required />
                    <input type='number' placeholder='phone' name='number' required />
                    <input type='submit' />
                </form>
            </div>

        </div>
    )
}
export default Update
































// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import './Update.css'

// function Update() {

//     const { id } = useParams();
//     const [user, setUser] = useState({});

//     useEffect(() => {
//         const url = `http://localhost:5000/services/${id}`
//         fetch(url)
//             .then(res => res.json())
//             .then(data => setUser(data))
//     }, [])
//     const handleUpdate = (e) =>{
//         const name = e.target.name.value
//         const address = e.target.address.value
//         const number = e.target.number.value
//         const user = { name, address, number}

//         const url = `http://localhost:5000/services/${id}`

//         fetch(url, {
//             method: 'PUT',
//             body: JSON.stringify(user),
//             headers:{
//                 'Content-Type' : 'application/json'
//             }
//         })
//         .then(res => res.json())
//         .then(data => console.log(data))
//     }
//     return (
//         <div className='updateContainer'>
//             <h3>Updating : _ </h3>
//             <h5>Name : {user.name} </h5>
//             <h5>Address: {user.address} </h5>
//             <h5>phone : {user.phone} </h5>
//             <h5>ID : {user._id} </h5>
 // <div>
 //     <form onSubmit={handleUpdate} className='d-flex flex-column'>
 //         <input type='text' placeholder='name' name='name' required />
 //         <input type='text' placeholder='address' name='address' required />
 //         <input type='number' placeholder='phone' name='number' required />
 //         <input type='submit' />
 //     </form>
 // </div>
//         </div>
//     );
// }

// export default Update