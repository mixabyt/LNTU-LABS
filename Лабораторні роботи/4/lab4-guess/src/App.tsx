export default function App() {
  function handleClick() {
    // Пункт 1: читаємо введення користувача
    const input = window.prompt('Введіть ціле число від 1 до 5');
    if (input === null) return; // «Скасувати» — завершити спробу без повідомлення.
    if (input.trim() === '') {
      window.alert('Ви не ввели число');
      return;
    }

    // Пункт 2: перевіряємо коректність введення
    const userNumber = Number(input);
    if (!Number.isInteger(userNumber) || userNumber < 1 || userNumber > 5) {
      window.alert('Потрібно ввести ціле число від 1 до 5');
      return;
    }

    // Пункт 3: генеруємо число комп'ютера від 1 до 5
    const computerNumber = Math.floor(Math.random() * 5) + 1;

    // Пункт 4: порівнюємо числа та показуємо результат
    const result = userNumber === computerNumber ? 'Ви вгадали!' : 'Спробуйте ще раз';
    window.alert(`Ви вказали число: ${userNumber}, число комп'ютера: ${computerNumber}. ${result}`);
  }

  return (
    <main className="app">
      <h1>Вкажіть будь-яке число від 1 до 5</h1>
      <button type="button" onClick={handleClick}>
        Почати
      </button>
    </main>
  );
}
