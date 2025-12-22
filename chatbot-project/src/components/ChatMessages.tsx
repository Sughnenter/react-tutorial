import {useRef, useEffect} from 'react'
import { ChatMessage } from './ChatMessage'
import './ChatMessages.css';

type ChatMessagesProps = {
  chatMessages: {
    id: string;
    message: string;
    sender: string;
  }[];
};

function ChatMessages({ chatMessages }: {chatMessages: ChatMessagesProps[]}) {
  const chatMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);
  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMesssage) => {
        return (
          <ChatMessage
            message={chatMesssage.message}
            sender={chatMesssage.sender}
            key={chatMesssage.id}
          />
        );
      })}
    </div>
  );
}

export  default ChatMessages;