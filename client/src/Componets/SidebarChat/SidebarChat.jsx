import { Avatar } from '@material-ui/core'
import './SidebarChat.css'
import React from 'react'

function SidebarChat() {
    return (
        <div className='sidebarChat'> 

        <Avatar />
        
        <div className="sidebarChat__info">
            <h2>Room Name</h2>
            <p>Last message in the room</p>
        </div>
            
        </div>
    )
}

export default SidebarChat
