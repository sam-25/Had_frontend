import React, { useState } from 'react';

const ChatWindow = ({ user }) => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const sendMessage = () => {
    // Implement the logic to send the message to the backend
    // and update the chatMessages state with the new message.
    setChatMessages([...chatMessages, { sender: user, message }]);
    setMessage('');
  };

  return (
    <div>
      <h2>Chat with {user}</h2>
      <div>
        {chatMessages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.sender}:</strong> {msg.message}
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

const UserList = ({ users, onSelectUser }) => {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user} onClick={() => onSelectUser(user)}>
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ChatApp = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const users = ['User1', 'User2', 'User3', 'User4'];

  const onSelectUser = (user) => {
    setSelectedUser(user);
  };

  const onCreateGroupChat = () => {
    // Implement logic to create a group chat with selectedUsers
    setSelectedUser(null);
    setSelectedUsers([]);
  };

  return (
    <div>
      {selectedUser ? (
        <ChatWindow user={selectedUser} />
      ) : (
        <UserList users={users} onSelectUser={onSelectUser} />
      )}
      <div>
        <h2>Selected Users</h2>
        <ul>
          {selectedUsers.map((user) => (
            <li key={user}>{user}</li>
          ))}
        </ul>
        <button onClick={onCreateGroupChat}>Create Group Chat</button>
      </div>
    </div>
  );
};

export default ChatApp;
