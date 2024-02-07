import React from 'react'
import "../Main.scss"

function SideBar() {
  return (
    <div className='left'>
    <div className='divone'>
    <h1>Nav Bar</h1>
    <h2>Admin</h2>
    </div>
    <div className='divtwo'>
    <ul>
      <li>Product</li>
      <li>Price</li>
      <li>Rating</li>
    </ul>
    </div>
    </div>
  )
}

export default SideBar