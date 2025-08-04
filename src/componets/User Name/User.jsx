import React, { Component } from 'react'
import './User.css'

export default class User extends Component {
   render() {
      return (
         <div className='userNameDropDown'>
            <div className='user'>
               <nav className="navbar">
                  <img  src="/images/user_icon.svg" alt="User Icon" />
                  <h1 className='userHeading'>User Name</h1>
                  <ul>
                     <li>
                        <img className='Dropdown' src="/images/DropDown.svg" alt="Dropdown Icon" />
                        <div className="dropdown-content">
                           <a href="#">Web Design</a>
                           <a href="#">Development</a>
                           <a href="#">SEO</a>
                        </div>
                     </li>
                  </ul>
               </nav>
            </div>
         </div>
      )
   }
}
