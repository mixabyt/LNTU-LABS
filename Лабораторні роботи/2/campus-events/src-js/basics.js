// Завдання A1. Найпростіші функції

function formatEventTitle(title, category) {
  return `Подія: ${title} (${category})`;
}

function isRegistrationOpen(seatsLeft) {
  return seatsLeft > 0;
}

function printEventSummary(title, seatsLeft) {
  const status = isRegistrationOpen(seatsLeft) ? 'реєстрація відкрита' : 'реєстрацію закрито';
  console.log(`${formatEventTitle(title, 'подія кампусу')} — ${status}`);
}

module.exports = { formatEventTitle, isRegistrationOpen, printEventSummary };
