import React, { useState } from 'react';

const Insert = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const handleName = e => {
        const inputName = e.target.value
        setName(inputName)
    }
    const handleAddress = e => {
        const inputAddress = e.target.value
        setAddress(inputAddress)
    }
    const handlePhone = e => {
        const inputPhone = e.target.value
        setPhone(inputPhone)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const input = { name, address, phone };
        // setInputs(input)
        return fetch('http://localhost:5000/services', {
            method: 'POST',
            body: JSON.stringify(input),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    e.target.reset()
                }
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <h3>insert service here</h3>
            <form onSubmit={handleSubmit} className='d-flex flex-column'>
                <input onChange={handleName} type='text' placeholder='name' required />
                <input onChange={handleAddress} type='text' placeholder='address' required />
                <input onChange={handlePhone} type='number' placeholder='phone' required />
                <input type='submit' />
            </form>
        </div>
    )
}
export default Insert