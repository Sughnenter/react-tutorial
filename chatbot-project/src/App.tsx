import { useState } from "react";
import { ChatInput } from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";
import "./App.css";
import RobotFavicon from "./assets/robot-favicon.png";

function App() {
  const [chatMessages, setChatMessages] = useState([
    { message: "Hello Chatbot", sender: "user", id: "id1" },
    { message: "Hello! How can I help you?", sender: "robot", id: "id2" },
    { message: "Can you get me todays date?", sender: "user", id: "id3" },
    { message: "Today is september 27", sender: "robot", id: "id4" },
  ]);
  const title = `${chatMessages.length} Messages`;
  //const [chatMessages, setChatMessages] = array;
  //const chatMessages = array[0];
  //const setChatMessages = array[1];

  return (
    <>
      <title>{title}</title>
      <link rel="icon" type="image/svg+xml" href={RobotFavicon} />
      <div className="app-container">
        <ChatMessages chatMessages={chatMessages} />
        <ChatInput
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
        />
      </div>
    </>
  );
}

export default App;
