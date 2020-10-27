import React from 'react'
import "./Sidebar.css"

import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from "@material-ui/icons";

import { Avatar, IconButton } from '@material-ui/core';

import SidebarChat from "../SidebarChat/SidebarChat"

export default function Sidebar() {
    return (
        <div className='sidebar'>
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
            </div>
            
             <div className="sidebar__search">
                     <div className="sidebar__searchContainer">
                         <SearchOutlined />
                         <input placeholder="Search or start new chat" type='text' />
                     </div>
                 </div>

                 <div className="sidebar__Chats">
                     <SidebarChat />
                     <SidebarChat />
                     <SidebarChat />
                 </div>
        </div>
    )
}
