import { useState} from "react";
import { Chatbot } from "supersimpledev";
import './ChatInput.css'; 
import dayjs from 'dayjs';

// type ChatInputProps = {
//   chatMessages: {
//     message: string;
//     sender: string;
//     id: string;
//   }[];
// }
//   setChatMessages: React.Dispatch<
//     React.SetStateAction<
//       {
//         message: string;
//         sender: "user" | "robot";
//         id: string;
//       }[]
//     >
//   >;
// };


type ChatMessages = {
  message: string;
  sender: string;
  id: string;
}[];

type ChatInputProps = {
  chatMessages: ChatMessages;
  setChatMessages: (chatMessages: ChatMessages) => void;
};

export function ChatInput({ chatMessages, setChatMessages }: ChatInputProps) {
  const [inputText, setInputText] = useState("");
  function saveInputText(event: {
    target: {
      value: string;
    };
  }) {
    setInputText(event.target.value);
  }
  function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
        time: dayjs().valueOf()
      },
    ];
    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
        time: dayjs().valueOf()
      },
    ]);

    setInputText("");
  }
  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to chatbot"
        size={30}
        onChange={saveInputText}
        value={inputText}
        className="chat-input"
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  );
}
