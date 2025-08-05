import React, { Component } from 'react'
import './User.css'

export default class User extends Component {
   render() {
      return (
         <div className='userNameDropDown'>
            <div className='user'>
               <nav className="navbar">
                  <img src="/images/user_icon.svg" alt="User Icon" />
                  <h1 className='userHeading'>User Name</h1>


                  <div class="dropdown">
                     <input type="checkbox" id="dropdownToggle" hidden />

                     <label for="dropdownToggle">
                        <img class="Dropdown" src="/images/DropDown.svg" alt="Dropdown Icon" />
                     </label>

                     <div class="dropdown-content">
                        <a href="#">Web Design</a>
                        <a href="#">Development</a>
                        <a href="#">SEO</a>
                     </div>
                  </div>




               </nav>
            </div>
         </div>
      )
   }
}
