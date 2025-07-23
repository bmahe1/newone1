import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Backend unavailable"));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
      <h1>Frontend App</h1>
      <p>Message from backend: {message}</p>
    </div>
  );
}

export default App;
