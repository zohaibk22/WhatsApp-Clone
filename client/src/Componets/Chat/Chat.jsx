import React from 'react'
import "./Chat.css"

import { Avatar, IconButton } from "@material-ui/core"
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons'
import MicIcon from "@material-ui/icons/Mic"

export default function Chat({messages}) {
    return (
        <div className = 'chatbox'>
            <div className="chat__header">
                <Avatar />

                <div className="chat__headerInfo">
                    <h3>Room Name</h3>

                    <p>Last seen at...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>

                    <IconButton>
                        <AttachFile />
                    </IconButton>

                    <IconButton>
                        <MoreVert/>
                    </IconButton>

                </div>
            </div>

            <div className="chat__body">

              {
                messages.map(message => (
                  <p className={`chat__message ${message.received && "chat__receiver"  }`}>
                    <span className="chat__name">{message.name}</span>
                    {message.message}
                      <span className="chat__timestamp">{message.timestamp}</span>
                 </p>
                  
    ))
              }
                <p className='chat__message'>
                    <span className="chat__name">Zohaib</span>
                    This is a Message 
                      <span className="chat__timestamp">{new Date().toUTCString()}</span>
                 </p>

                 <p className='chat__receiver chat__message'>
                    <span className="chat__name">Zohaib</span>
                    This is a Message 
                      <span className="chat__timestamp">{new Date().toUTCString()}</span>
                 </p>

                 <p className='chat__message'>
                    <span className="chat__name">Zohaib</span>
                    This is a Message 
                      <span className="chat__timestamp">{new Date().toUTCString()}</span>
                 </p>
                  <p className='chat__message'>
                    <span className="chat__name">Zohaib</span>
                    This is a Message 
                      <span className="chat__timestamp">{new Date().toUTCString()}</span>
                 </p>
                  <p className='chat__message'>
                    <span className="chat__name">Zohaib</span>
                    This is a Message 
                      <span className="chat__timestamp">{new Date().toUTCString()}</span>
                 </p>
                 


            </div>

            <div className="chat__footer">
                <InsertEmoticon />
                <form> 
                    <input placeholder="Type a message"
                    type='text' />
                    <button
                    type='submit'
                    
                    >
                       Send a message
                    </button>

                    <MicIcon />

                </form>
            </div>

        
            
        </div>
    )
}
