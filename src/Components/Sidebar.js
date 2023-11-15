import React from 'react'
import "../App.css";
import {SidebarItem} from './SidebarItem';
function Sidebar() {
  return (
    <div className='sidebar'>
        <ul>
            {SidebarItem.map((val, key) => {
                return(
                <li key={key} onClink={()=>(window.location.pathname = val.link)}> 
                {" "}
                <div>{val.icon}</div> 
                <div>{val.title}</div> 
                </li>
            )})
            
            }
        </ul>
    </div>
  )
}

export default Sidebar