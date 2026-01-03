
import { useState, useEffect } from 'react';
import { createConnection } from './chat'; // Assume this manages server connection

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
    // Side Effect: Connect to the chat server
    const connection = createConnection(serverUrl, roomId);
    connection.connect();

    // Cleanup: Disconnect when component unmounts or dependencies change
    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]); // Re-run effect if roomId or serverUrl changes

  return (
    <>
      <label>Server URL: {' '}
        <input value={serverUrl} onChange={e => setServerUrl(e.target.value)} />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
    </>
  );
}

export default Chatroom;
