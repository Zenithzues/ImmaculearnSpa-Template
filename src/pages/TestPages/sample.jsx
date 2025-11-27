// import { useState, useEffect, useRef } from 'react';

// export default function Sample() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const ws = useRef(null);

//   useEffect(() => {
//     // Connect to WebSocket server
//     ws.current = new WebSocket(`ws://${window.location.hostname}:3000?docName=default-doc`);

//     ws.current.onopen = () => {
//       console.log('Connected to WebSocket server');
//       setMessages(prev => [...prev, 'Connected to server']);
//     };

//     ws.current.onmessage = (event) => {
//       setMessages(prev => [...prev, `Server: ${event.data}`]);
//     };

//     ws.current.onclose = () => {
//       console.log('Disconnected from server');
//       setMessages(prev => [...prev, 'Disconnected from server']);
//     };

//     ws.current.onerror = (err) => {
//       console.error('WebSocket error:', err);
//       setMessages(prev => [...prev, 'WebSocket error']);
//     };

//     return () => {
//       ws.current.close();
//     };
//   }, []);

//   const sendMessage = () => {
//     if (input.trim() === '') return;
//     ws.current.send(input);
//     setMessages(prev => [...prev, `You: ${input}`]);
//     setInput('');
//   };

//   return (
//     <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
//       <h1>WebSocket Test</h1>
//       <div style={{ border: '1px solid #ccc', height: '200px', overflowY: 'auto', padding: '0.5rem' }}>
//         {messages.map((msg, idx) => (
//           <div key={idx}>{msg}</div>
//         ))}
//       </div>
//       <input
//         type="text"
//         value={input}
//         onChange={e => setInput(e.target.value)}
//         onKeyDown={e => e.key === 'Enter' && sendMessage()}
//         placeholder="Type a message"
//         style={{ width: '70%', padding: '0.5rem', marginTop: '1rem' }}
//       />
//       <button onClick={sendMessage} style={{ padding: '0.5rem 1rem', marginLeft: '0.5rem' }}>
//         Send
//       </button>
//     </div>
//   );
// }



import { useState, useEffect, useRef } from 'react';
import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';

export default function CollaborativeTextarea() {
  const [value, setValue] = useState('');
  const yTextRef = useRef(null);

  useEffect(() => {
    const doc = new Y.Doc();
    const provider = new WebsocketProvider(
      'ws://localhost:3000',
      'textarea-doc',
      doc
    );

    provider.on('status', e => console.log('WS status:', e.status));

    // Create or get shared text
    const yText = doc.getText('shared-text');
    yTextRef.current = yText;

    // Observe changes from other users
    const updateValue = () => setValue(yText.toString());
    yText.observe(updateValue);

    // Initialize value
    setValue(yText.toString());

    return () => {
      yText.unobserve(updateValue);
      provider.disconnect();
      doc.destroy();
    };
  }, []);

  const handleChange = e => {
    const yText = yTextRef.current;
    if (!yText) return;

    // Get the old value
    const oldValue = yText.toString();
    const newValue = e.target.value;

    console.log(oldValue)

    // Simple diff algorithm (replace all for simplicity)
    yText.delete(0, oldValue.length);
    yText.insert(0, newValue);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Collaborative Textarea</h1>
      <textarea
        value={value}
        onChange={handleChange}
        placeholder="Start typing..."
        style={{ width: '100%', height: '200px', padding: '0.5rem' }}
      />
    </div>
  );
}




// export default function Sample() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const yTextRef = useRef(null);

//   useEffect(() => {
//     // Create Yjs document
//     const doc = new Y.Doc();

//     // Connect to y-websocket server
//     const provider = new WebsocketProvider(
//       `ws://${window.location.hostname}:3000`, // backend y-websocket server
//       'default-doc',                            // document/room name
//       doc
//     );

//     // Shared text type for chat messages
//     const yText = doc.getText('messages');
//     yTextRef.current = yText;

//     // Listen for updates from other clients
//     yText.observe(() => {
//       const value = yText.toString();
//       // Split by newline for separate messages
//       setMessages(value.split('\n').filter(Boolean));
//     });

//     provider.on('status', event => console.log('CRDT Status:', event.status));
//     provider.on('synced', synced => console.log('CRDT Synced?', synced));

//     return () => {
//       provider.disconnect();
//       doc.destroy();
//     };
//   }, []);

//   const sendMessage = () => {
//     if (input.trim() === '') return;
//     // Append new message to shared text
//     if (yTextRef.current) {
//       const current = yTextRef.current.toString();
//       const updated = current ? current + '\n' + input : input;
//       yTextRef.current.delete(0, yTextRef.current.length);
//       yTextRef.current.insert(0, updated);
//     }
//     setInput('');
//   };

//   return (
//     <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
//       <h1>CRDT Chat (React + y-websocket)</h1>
//       <div style={{ border: '1px solid #ccc', height: '200px', overflowY: 'auto', padding: '0.5rem' }}>
//         {messages.map((msg, idx) => (
//           <div key={idx}>{msg}</div>
//         ))}
//       </div>
//       <input
//         type="text"
//         value={input}
//         onChange={e => setInput(e.target.value)}
//         onKeyDown={e => e.key === 'Enter' && sendMessage()}
//         placeholder="Type a message"
//         style={{ width: '70%', padding: '0.5rem', marginTop: '1rem' }}
//       />
//       <button onClick={sendMessage} style={{ padding: '0.5rem 1rem', marginLeft: '0.5rem' }}>
//         Send
//       </button>
//     </div>
//   );
// }
