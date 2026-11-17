import { describe, expect, test } from '@jest/globals';
import { events, findEventById, getEventsByCategory, getEventTitles, getOpenEvents } from '../src/events';
import { Attendee } from '../src/attendee';

describe('events', () => {
  test('getOpenEvents не повертає подію з нульовою кількістю місць', () => {
    const result = getOpenEvents(events);

    expect(result.every((event) => event.seatsLeft > 0)).toBe(true);
    expect(result.some((event) => event.id === 'it-meetup')).toBe(false);
  });

  test('getEventsByCategory повертає лише потрібну категорію', () => {
    const result = getEventsByCategory(events, 'workshop');

    expect(result).toHaveLength(2);
    expect(result.every((event) => event.category === 'workshop')).toBe(true);
  });

  test('findEventById повертає undefined для невідомого ID', () => {
    expect(findEventById(events, 'unknown-id')).toBeUndefined();
  });

  test('getEventTitles повертає масив рядків із назвами', () => {
    const titles = getEventTitles(events);

    expect(titles).toHaveLength(events.length);
    expect(titles[0]).toBe('Відкрита лекція: Мобільний UX');
  });
});

describe('Attendee', () => {
  test('register додає новий ID', () => {
    const attendee = new Attendee('st-01', 'Олена');

    expect(attendee.register('ux-lecture')).toBe(true);
    expect(attendee.isRegisteredFor('ux-lecture')).toBe(true);
  });

  test('register не додає той самий ID двічі', () => {
    const attendee = new Attendee('st-01', 'Олена');
    attendee.register('ux-lecture');

    expect(attendee.register('ux-lecture')).toBe(false);
    expect(attendee.registeredEventIds).toEqual(['ux-lecture']);
  });
});
