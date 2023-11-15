import React from 'react'
import "../App.css";
import {SidebarItem} from './SidebarItem';
function Sidebar() {
  return (
    <div className='sidebar'>
        <ul className='sidebarList'>
            {SidebarItem.map((val, key) => {
                return(
                <li className='row' key={key} onClink={()=>(window.location.pathname = val.link)}> 
                {" "}
                <div id="icon">{val.icon}</div> 
                <div id="title" >{val.title}</div> 
                </li>
            )})
            
            }
        </ul>
    </div>
  )
}

export default Sidebar