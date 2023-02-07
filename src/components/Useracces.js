import React from 'react'
import "./User.css"

function Useracces() {
  return (
    <div className='body-container' >
     <div className="card-container">
         
      <div className="profile-picture">
      <i class="fa-solid fa-user"></i>
      </div>
         
        <div className="username">
          <p>User Name</p>
        </div>
          
          <div className="check-box">
           
           <button className='button-1'>Check-In</button>
           <button className='button-2'>Check-Out</button>

          </div>


     </div>

     <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

    </div>
  )
}

export default Useracces