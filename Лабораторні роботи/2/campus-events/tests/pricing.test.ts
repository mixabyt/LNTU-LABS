import { describe, expect, test } from '@jest/globals';
import { events } from '../src/events';
import { calculateRegistration } from '../src/pricing';

describe('calculateRegistration', () => {
  test('правильно рахує суму без знижки', () => {
    expect(calculateRegistration(events, ['react-workshop'], 2)).toEqual({ subtotal: 300, discount: 0, total: 300 });
  });

  test('застосовує 10% знижку для групи з 10 людей', () => {
    expect(calculateRegistration(events, ['react-workshop', 'ts-workshop'], 10)).toEqual({ subtotal: 3500, discount: 350, total: 3150 });
  });

  test('кидає помилку для недопустимого groupSize', () => {
    expect(() => calculateRegistration(events, ['react-workshop'], 0)).toThrow('Кількість учасників має бути цілим числом від 1 до 30');
  });

  test('кидає помилку для невідомої події', () => {
    expect(() => calculateRegistration(events, ['unknown-id'], 1)).toThrow('Подію з ID unknown-id не знайдено');
  });

  test('кидає помилку для заповненої події', () => {
    expect(() => calculateRegistration(events, ['it-meetup'], 1)).toThrow('немає вільних місць');
  });
});
