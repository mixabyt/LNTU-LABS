import { useState } from 'react';
import Counter from './Counter';
import TextInput from './TextInput';

export default function App() {
  const [text, setText] = useState('');

  return (
    <main className="app">
      <Counter />
      <TextInput value={text} onTextChange={setText} />
      <p>Number of characters: {text.length}</p>
    </main>
  );
}
