import React from "react";
import "./App.css";
import Sidebar from "./Componets/Sidebar/Sidebar";
import Chat from "./Componets/Chat/Chat";

function App() {
  return (
    <div className="App">
      <h1>Lets Build a Mern whatsapp clone</h1>

      <div className="app__body">
        {/* SideBar */}
        <Sidebar />
        <Chat />
        {/* Chat componet */}
      </div>
    </div>
  );
}

export default App;
