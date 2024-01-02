import React, { useState, useRef, useEffect } from 'react'
import {links,social}from './data'

import logo from './logo.svg'

const Navbar = () => {
  const [showLinkes,setLinks]=useState(false);
  return <nav>
      <div className="nav-center">
           <div className="nav-header">
             <img src={logo} alt="" />
          
               <button className="nav-toggle" onClick={()=>setLinks(!showLinkes)}>menu</button>
        
           </div>

        <div>
             {
              showLinkes && <div>
                 <div className="link-container show-container">
              <ul className="links">
          {
          links.map((link)=>{
           const {id,text,url }=link
           return(
             <li key={id}> 
              <a href={url}>{text}</a>
             </li>
           )
          })
          }
              </ul>
          </div>
          <ul className="scocials-icons">
          {
          social.map((link)=>{
           const {id,icon,url }=link
           return(
             <li key={id}> 
              <a href={url}>{icon}</a>
             </li>
           )
          })
          }
          </ul>
              </div>

             }
        </div>
      </div>
  </nav>
}

export default Navbar
