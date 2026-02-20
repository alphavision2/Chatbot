  import { useState, } from 'react'
  import { Chatbot } from 'supersimpledev';
  import './ChatInput.css';
  export function ChatInput({ chatMessages, setChatMessages }) {
        const [inputText, setInputText] = useState("");

        function saveInputText(event) {
          setInputText(event.target.value);
        }

        function sendMessage() {
          if (inputText.trim() === "") {
            return;
          }

          const response = Chatbot.getResponse(inputText);

          setChatMessages([
            ...chatMessages,
            {
              message: inputText,
              sender: "user",
              id: crypto.randomUUID(),
            },
            {
              message: response,
              sender: "robot",
              id: crypto.randomUUID(),
            },
          ]);

          setInputText("");
        }

         const handleKeyDown = (event) => {
              if (event.key === "Enter") {
                sendMessage();
              }
            };

        return (
          <div className="chat-input-container">
            <input
              placeholder="Send a message to Chatbot"
              size="30"
              onChange={saveInputText}
              onKeyDown={handleKeyDown}
              value={inputText}
              className="chat-input"
            />
            <button onClick={sendMessage} className="send-button">
              Send
            </button>
          </div>
        );
      }