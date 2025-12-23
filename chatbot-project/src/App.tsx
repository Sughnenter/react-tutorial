import {ChatInput} from './components/ChatInput.tsx';
import { useState, useEffect } from 'react'
import { Chatbot } from 'supersimpledev';
import ChatMessages from "./components/ChatMessages.tsx";
import "./App.css";
import RobotFavicon from "./assets/robot.png";



function App() {
  const [chatMessages, setChatMessages] = useState([
    { message: "Hello Chatbot", sender: "user", id: "id1", time: 1736127288920 },
    { message: "Hello! How can I help you?", sender: "robot", id: "id2", time: 1736127291230 },
    { message: "Can you get me todays date?", sender: "user", id: "id3", time: 1736127385356 },
    { message: "Today is september 27", sender: "robot", id: "id4", time: 1736127385500 },
  ]);
  const title = `${chatMessages.length} Messages`;
  //const [chatMessages, setChatMessages] = array;
  //const chatMessages = array[0];
  //const setChatMessages = array[1];

  useEffect(() => {
    
    Chatbot.addResponses({
      'goodbye': 'Goodbye. Have a great day!',
      'give me a unique id': function() {
        return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
      }
    });

  // [] tells useEffect to only run once. We only want to run
  // this setup code once because we only want to add these
  // extra responses once.
  }, []);
  
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
