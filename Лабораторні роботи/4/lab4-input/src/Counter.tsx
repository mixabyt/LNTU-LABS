import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h2>Counter: {count}</h2>
      {count < 0 && <p role="status">Counter can't be negative</p>}
      <button type="button" onClick={() => setCount(previous => previous + 1)}>
        Increase
      </button>
      <button type="button" onClick={() => setCount(previous => previous - 1)}>
        Decrease
      </button>
    </section>
  );
}
