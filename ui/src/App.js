import React, { useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    setMessages([...messages, { text: inputValue, sender: 'user' }]);
    // Here you would typically send the input value to the backend and get a response
    // For now, let's just simulate a response from the backend
    setTimeout(() => {
      setMessages([...messages, { text: 'This is a response from the backend.', sender: 'bot' }]);
    }, 1000);
    setInputValue('');
  };

  return (
    <div className="App">
      <div className="chat-container">
        <div className="messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.text}
            </div>
          ))}
        </div>
        <form className="input-form" onSubmit={handleMessageSubmit}>
          <input
            type="text"
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default App;
