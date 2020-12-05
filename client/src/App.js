import React from "react";
import "./App.css";
import Sidebar from "./Componets/Sidebar/Sidebar";
import Chat from "./Componets/Chat/Chat";

function App() {
  useEffect(() => {
    var pusher = new Pusher("a1567d0b1bfdc7893def", {
      cluster: "us2",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", function (data) {
      alert(JSON.stringify(data));
    });
  }, []);
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
