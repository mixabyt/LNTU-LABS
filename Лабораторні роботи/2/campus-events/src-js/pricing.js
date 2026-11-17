// Завдання A4. Розрахунок вартості

const { findEventById } = require('./events');

function getDiscountRate(groupSize) {
  if (groupSize >= 10) return 0.1;
  if (groupSize >= 5) return 0.05;
  return 0;
}

function calculateRegistration(events, selectedIds, groupSize) {
  if (!Number.isInteger(groupSize) || groupSize < 1 || groupSize > 30) {
    throw new Error('Кількість учасників має бути цілим числом від 1 до 30');
  }

  let pricePerPerson = 0;
  for (const selectedId of selectedIds) {
    const event = findEventById(events, selectedId);
    if (!event) {
      throw new Error(`Подію з ID ${selectedId} не знайдено`);
    }
    if (event.seatsLeft === 0) {
      throw new Error(`На подію «${event.title}» немає вільних місць`);
    }
    pricePerPerson += event.price;
  }

  const subtotal = pricePerPerson * groupSize;
  const discount = subtotal * getDiscountRate(groupSize);
  const total = subtotal - discount;

  return {
    subtotal: Number(subtotal.toFixed(2)),
    discount: Number(discount.toFixed(2)),
    total: Number(total.toFixed(2)),
  };
}

module.exports = { calculateRegistration };
