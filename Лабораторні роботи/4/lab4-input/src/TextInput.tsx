import { useState } from 'react';

type TextInputProps = {
  value: string;
  onTextChange: (text: string) => void;
};

export default function TextInput({ value, onTextChange }: TextInputProps) {
  const [submittedText, setSubmittedText] = useState('');
  const [error, setError] = useState('');

  return (
    <section>
      <form
        onSubmit={event => {
          event.preventDefault();
          if (value.trim() === '') {
            setError('Введіть текст перед надсиланням');
            return;
          }
          setError('');
          setSubmittedText(value);
        }}
      >
        <label>
          Текст:
          <input
            value={value}
            onChange={event => onTextChange(event.currentTarget.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {error !== '' && <p role="alert">{error}</p>}
      <p>Підтверджений текст: {submittedText}</p>
    </section>
  );
}
