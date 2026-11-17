// Завдання A2. Масив подій

const events = [
  { id: 'ux-lecture', title: 'Відкрита лекція: Мобільний UX', startsAt: new Date('2026-10-01T16:00:00'), seatsLeft: 20, category: 'lecture', price: 0 },
  { id: 'react-workshop', title: 'Воркшоп: Перший застосунок на React', startsAt: new Date('2026-10-08T14:00:00'), seatsLeft: 12, category: 'workshop', price: 150 },
  { id: 'it-meetup', title: 'IT-мітап студентів', startsAt: new Date('2026-10-15T18:00:00'), seatsLeft: 0, category: 'meetup', price: 50 },
  { id: 'ts-workshop', title: 'Воркшоп: TypeScript на практиці', startsAt: new Date('2026-10-22T12:00:00'), seatsLeft: 8, category: 'workshop', price: 200 },
];

function getOpenEvents(events) {
  return events.filter((event) => event.seatsLeft > 0);
}

function getEventsByCategory(events, category) {
  return events.filter((event) => event.category === category);
}

function findEventById(events, id) {
  return events.find((event) => event.id === id);
}

function getEventTitles(events) {
  return events.map((event) => event.title);
}

module.exports = { events, getOpenEvents, getEventsByCategory, findEventById, getEventTitles };
