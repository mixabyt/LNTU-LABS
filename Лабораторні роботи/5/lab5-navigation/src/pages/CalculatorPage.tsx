import { useState } from 'react';

type Operation = 'add' | 'subtract' | 'multiply' | 'divide';

export default function CalculatorPage() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);
  const [error, setError] = useState('');

  function applyOperation(operation: Operation) {
    if (input.trim() === '') {
      setError('Введіть число.');
      return;
    }

    const operand = Number(input);
    if (!Number.isFinite(operand)) {
      setError('Введіть скінченне число.');
      return;
    }

    if (operation === 'divide' && operand === 0) {
      setError('Ділення на нуль неможливе.');
      return;
    }

    let nextResult: number;
    switch (operation) {
      case 'add':
        nextResult = result + operand;
        break;
      case 'subtract':
        nextResult = result - operand;
        break;
      case 'multiply':
        nextResult = result * operand;
        break;
      case 'divide':
        nextResult = result / operand;
        break;
    }

    if (!Number.isFinite(nextResult)) {
      setError('Результат завеликий для обчислення.');
      return;
    }

    setResult(nextResult);
    setError('');
  }

  return (
    <section>
      <h1>Калькулятор</h1>
      <p className="result" aria-live="polite">Результат: {result}</p>

      <label htmlFor="operand">Число для операції </label>
      <input
        id="operand"
        type="number"
        step="any"
        value={input}
        onChange={event => {
          setInput(event.currentTarget.value);
          setError('');
        }}
      />

      <div className="buttons">
        <button type="button" onClick={() => applyOperation('add')}>Додати</button>
        <button type="button" onClick={() => applyOperation('subtract')}>Відняти</button>
        <button type="button" onClick={() => applyOperation('multiply')}>Помножити</button>
        <button type="button" onClick={() => applyOperation('divide')}>Поділити</button>
      </div>
      <div className="buttons">
        <button type="button" onClick={() => { setInput(''); setError(''); }}>Очистити поле</button>
        <button type="button" onClick={() => { setResult(0); setError(''); }}>Скинути результат</button>
      </div>

      {error && <p role="alert">{error}</p>}
    </section>
  );
}
