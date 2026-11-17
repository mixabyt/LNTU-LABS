// Крок 4. Типи даних події

export type EventCategory = 'lecture' | 'workshop' | 'meetup';

export interface CampusEvent {
  id: string;
  title: string;
  startsAt: Date;
  seatsLeft: number;
  category: EventCategory;
  price: number;
}

export const events: CampusEvent[] = [
  { id: 'ux-lecture', title: 'Відкрита лекція: Мобільний UX', startsAt: new Date('2026-10-01T16:00:00'), seatsLeft: 20, category: 'lecture', price: 0 },
  { id: 'react-workshop', title: 'Воркшоп: Перший застосунок на React', startsAt: new Date('2026-10-08T14:00:00'), seatsLeft: 12, category: 'workshop', price: 150 },
  { id: 'it-meetup', title: 'IT-мітап студентів', startsAt: new Date('2026-10-15T18:00:00'), seatsLeft: 0, category: 'meetup', price: 50 },
  { id: 'ts-workshop', title: 'Воркшоп: TypeScript на практиці', startsAt: new Date('2026-10-22T12:00:00'), seatsLeft: 8, category: 'workshop', price: 200 },
];

export function getOpenEvents(events: CampusEvent[]): CampusEvent[] {
  return events.filter((event) => event.seatsLeft > 0);
}

export function getEventsByCategory(events: CampusEvent[], category: EventCategory): CampusEvent[] {
  return events.filter((event) => event.category === category);
}

export function findEventById(events: CampusEvent[], id: string): CampusEvent | undefined {
  return events.find((event) => event.id === id);
}

export function getEventTitles(events: CampusEvent[]): string[] {
  return events.map((event) => event.title);
}
