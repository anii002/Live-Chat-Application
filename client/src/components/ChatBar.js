import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
const ChatBar = ({ socket }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on("newUserResponse", (data) => setUsers(data));
  }, [socket, users]);

  return (
    <div className="chat_sidebar">
    <h4 className="bg-info text-white px-2 py-2 rounded fw-semibold mb-4 text-center">
      ACTIVE USERS
    </h4>
    <div className="chat__users_list px-3">
      <ul className="list-unstyled">
        {users.map((user) => (
          <li key={user.socketID} className="active_user_item">
            <span className="user_status">
              <FontAwesomeIcon icon={faCircle} className="text-success" />
            </span>
            {user.userName}
          </li>
        ))}
      </ul>
    </div>
  </div>
  
  );
};

export default ChatBar;
