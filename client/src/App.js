import React from "react";
import "./App.css";
import Sidebar from "./Componets/Sidebar/Sidebar";
import Chat from "./Componets/Chat/Chat";
import { useState, useEffect } from "react";
import Pusher from "pusher-js";
import axios from "./Services/apiHelper";
import { MessageSharp } from "@material-ui/icons";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      setMessages(response.data);
    });
  }, []);
  useEffect(() => {
    var pusher = new Pusher("a1567d0b1bfdc7893def", {
      cluster: "us2",
    });

    const channel = pusher.subscribe("message");
    channel.bind("inserted", function (newMessage) {
      alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage]);

      // we have this because pusher will subscribe each time a new message is sent and messages is updated
      return () => {
        channel.unbind_all();
        channel.unsubscribe();
      };
    });
  }, [messages]);

  console.log(messages);
  return (
    <div className="App">
      <h1>Lets Build a Mern whatsapp clone</h1>

      <div className="app__body">
        {/* SideBar */}
        <Sidebar />
        <Chat messages={messages} />
        {/* Chat componet */}
      </div>
    </div>
  );
}

export default App;
