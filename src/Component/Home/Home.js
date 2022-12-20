import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Home.css'
const Home = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete this user?')
        if (proceed) {
            const url = `http://localhost:5000/services/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = users.filter(user => user._id !== id)
                        setUsers(remaining)
                    }
                })
        }

    }

    return (
        <>
            <h3 className='title'>I GROW BY HELPING PEOPLE IN NEDDED.</h3>

            <div className='search-container'>
                <div className='search-div'>
                    <input type="text" name="input" placeholder='Search...' autoComplete='off' />
                    <button>Search</button>
                </div>
            </div>
            <div className='container mt-5'>
                <h3 className='text-center'>My Won Data: {users.length}</h3>
                <div className=''>
                    <div className=''>
                        <ul className='row'>
                            {
                                users.map(user => <li key={user._id} className='orderList col-4'>
                                    <h6>
                                        Name: {user.name}
                                        Address: {user.address}
                                        Phone:{user.phone}
                                    </h6>
                                    <Link to={`/update/${user._id}`}>Update</Link>
                                    <button onClick={() => handleDelete(user._id)} className='deleteButton'><i className="fa-sharp fa-solid fa-trash"></i></button>
                                </li>)
                            }
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Home

























































