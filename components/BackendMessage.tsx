'use client';

import { useEffect, useState } from 'react';

export default function BackendMessage() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/api/message')
      .then(res => res.json())
      .then(data => setMsg(data.message));
  }, []);

  return <p>Message from Express: {msg}</p>;
}
