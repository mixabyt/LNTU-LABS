// Завдання A5. Точка запуску JavaScript-версії

const { printEventSummary } = require('./basics');
const { events, getOpenEvents } = require('./events');
const { Attendee } = require('./attendee');
const { calculateRegistration } = require('./pricing');

console.log('Відкриті події:');
for (const event of getOpenEvents(events)) {
  console.log(event.title);
}

printEventSummary(events[2].title, events[2].seatsLeft);

const attendee = new Attendee('st-01', 'Олена');
console.log('Реєстрація на ux-lecture:', attendee.register('ux-lecture'));
console.log('Реєстрація на react-workshop:', attendee.register('react-workshop'));
console.log('Повторна реєстрація на ux-lecture:', attendee.register('ux-lecture'));

console.log('Вартість для групи з 10 осіб:', calculateRegistration(events, ['react-workshop', 'ts-workshop'], 10));
