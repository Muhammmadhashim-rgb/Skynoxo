import React, { Component } from 'react'
import './User.css'

export default class User extends Component {
   render() {
      return (
         <div className='userNameDropDown'>

            <div className='user'>

               <nav className="navbar">
                  <ul>
                     <li>
                        <a href="#">▾</a>
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
