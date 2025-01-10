import React, { useState } from 'react';
import axios from 'axios';

const PostMessage: React.FC = () => {
  const [message, setMessage] = useState('');

  const handlePostMessage = async () => {
    try {
      await axios.post('http://localhost:5000/messages', { content: message });
      alert('Message posted successfully');
      setMessage('');
    } catch (error) {
      console.error('Error posting message:', error);
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Post a Message</h2>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        placeholder="Type your message here"
      ></textarea>
      <button
        onClick={handlePostMessage}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Post Message
      </button>
    </div>
  );
};

export default PostMessage;