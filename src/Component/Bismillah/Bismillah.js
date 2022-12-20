import React from 'react'
import './Bismillah.css'

const Bismillah = () => {
  return (
    <div className='main-div'>Bismillah</div>
  )
}

export default Bismillah



// const handleDelete = id => {
//   const proceed = window.confirm('Are you sure to delete this user?')
//   if (proceed) {
//       // console.log('deleted id :', id)
//       const url = `http://localhost:5000/services/${id}`
//       fetch(url, {
//           method: 'DELETE'
//       })
//           .then(res => res.json())
//           .then(data => {
//              if(data.deletedCount > 0){
//                   const remaining = users.filter(user => user._id !== id)
//                   setUsers(remaining)
//              }
//           })
//   }
// };