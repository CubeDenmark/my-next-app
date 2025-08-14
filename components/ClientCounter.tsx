'use client';

import { useState } from 'react';

export default function ClientCounter() {
  console.log("ClientCounter rendered on client"); // Runs on every client navigation
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Client Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
