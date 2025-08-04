import React, { Component } from 'react'
import './User.css'

export default class User extends Component {
   render() {
      return (
         <div className='userNameDropDown'>

            <nav class="navbar">
               <ul>
                  
                  <li>
                     <a href="#">▾</a>
                     <div class="dropdown-content">
                        <a href="#">Web Design</a>
                        <a href="#">Development</a>
                        <a href="#">SEO</a>
                     </div>
                  </li>
                  
                  
               </ul>
            </nav>
         </div>
      )
   }
}
