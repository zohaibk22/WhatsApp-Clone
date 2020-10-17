import React from 'react'
import "./Sidebar.css"

import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { Avatar, IconButton } from '@material-ui/core';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <h3>I am a sideBar</h3>

            <div className="sidebar__header">

                <Avatar src = "https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg"/>
                 <div className="sidebar__headerRight">
                     <IconButton >
                         <DonutLargeIcon />
                     </IconButton>
                    

                     <IconButton>
                          <ChatIcon />
                     </IconButton>


                     <IconButton >
                         <MoreVertIcon />
                     </IconButton>


                 </div>

                 <div className="sidebar__left"></div>
            </div>
            
        </div>
    )
}
