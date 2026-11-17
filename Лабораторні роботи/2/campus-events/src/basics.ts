// Завдання A1 на TypeScript

export function formatEventTitle(title: string, category: string): string {
  return `Подія: ${title} (${category})`;
}

export function isRegistrationOpen(seatsLeft: number): boolean {
  return seatsLeft > 0;
}

export function printEventSummary(title: string, seatsLeft: number): void {
  const status = isRegistrationOpen(seatsLeft) ? 'реєстрація відкрита' : 'реєстрацію закрито';
  console.log(`${formatEventTitle(title, 'подія кампусу')} — ${status}`);
}
