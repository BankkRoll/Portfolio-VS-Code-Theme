import React, { useState, useEffect } from 'react';
import '../styles/ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [typedText, setTypedText] = useState('');
  const [isTypingDone, setIsTypingDone] = useState(false);
  const textToType = "Hey, how can I help you?";

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    let timerId;
    if (isOpen) {
      let i = 0;
      setIsTypingDone(false);
      timerId = setInterval(() => {
        if (i < textToType.length) {
          setTypedText((prevTypedText) => prevTypedText + textToType[i]);
          i++;
        } else {
          clearInterval(timerId);
          setIsTypingDone(true); // Indicate that typing is done
        }
      }, 100);
    } else {
      setTypedText('');
      setIsTypingDone(false);
    }
    return () => {
      clearInterval(timerId);
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const subject = `New Chatbot Request from: ${formData.email}`;
    const emailContent = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
  
    // Open the user's email client pre-filled with the message
    window.location.href = `mailto:bankkroll.eth@gmail.com?subject=${subject}&body=${encodeURI(emailContent)}`;
  
    // Clear the form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className={`chat-bot ${isOpen ? 'open' : 'closed'}`}>
      <button className="toggle-button" onClick={handleToggle}>
        {isOpen ? '❌' : '👋'}
      </button>
      {isOpen && (
        <div className="chat-window">
          <span className={`typing-container ${isTypingDone ? '' : 'no-cursor'}`}>{typedText}</span>
  
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
            />
            <input
            className='input'
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
            />
            <input
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here"
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;

