-- Лабораторна робота №13. Запити для варіанта «Кінотеатр»
PRAGMA foreign_keys = ON;

-- 1. Усі фільми з явним переліком полів, за назвою
SELECT id, title, duration_min, age_rating, release_year
FROM films
ORDER BY title;

-- 2. Сеанси в Залі 1 або 2 дорожчі за 140 грн, від дорожчого до дешевшого, перші 3
SELECT id, film_id, hall, starts_at, price_kop / 100.0 AS price_uah
FROM sessions
WHERE hall IN ('Зал 1', 'Зал 2') AND price_kop > 14000
ORDER BY price_kop DESC
LIMIT 3;

-- 3. Додавання нового квитка
INSERT INTO tickets (session_id, seat_row, seat_number, buyer_name, paid_kop)
VALUES (3, 10, 2, 'Олена Коваль', 14000);

-- 4. Зміна одного запису за первинним ключем (перед цим SELECT з тією самою умовою)
SELECT id, buyer_name, seat_row, seat_number FROM tickets WHERE id = 3;
UPDATE tickets SET seat_number = 4 WHERE id = 3;

-- 5. Видалення одного запису за первинним ключем (перед цим SELECT з тією самою умовою)
SELECT id, buyer_name FROM tickets WHERE id = 10;
DELETE FROM tickets WHERE id = 10;

-- 6. JOIN трьох таблиць: хто на який фільм купив квиток
SELECT t.id AS ticket_id, f.title, s.hall, s.starts_at,
       t.seat_row, t.seat_number, t.buyer_name
FROM tickets AS t
JOIN sessions AS s ON s.id = t.session_id
JOIN films AS f ON f.id = s.film_id
ORDER BY s.starts_at, t.seat_row, t.seat_number;

-- 7. LEFT JOIN: фільм без сеансів теж потрапляє в результат
SELECT f.id, f.title, s.id AS session_id, s.starts_at
FROM films AS f
LEFT JOIN sessions AS s ON s.film_id = f.id
ORDER BY f.id, s.starts_at;

-- 8a. Кількість проданих квитків на кожен сеанс (сеанс без квитків дає 0)
SELECT s.id, f.title, s.starts_at, COUNT(t.id) AS tickets_sold
FROM sessions AS s
JOIN films AS f ON f.id = s.film_id
LEFT JOIN tickets AS t ON t.session_id = s.id
GROUP BY s.id, f.title, s.starts_at
ORDER BY s.id;

-- 8b. Загальна виручка та середня ціна квитка за кожним фільмом
SELECT f.title,
       COUNT(t.id) AS tickets,
       SUM(t.paid_kop) / 100.0 AS revenue_uah,
       ROUND(AVG(t.paid_kop) / 100.0, 2) AS avg_price_uah
FROM films AS f
JOIN sessions AS s ON s.film_id = f.id
JOIN tickets AS t ON t.session_id = s.id
GROUP BY f.id, f.title
ORDER BY revenue_uah DESC;

-- 9. Транзакція з відкатом
BEGIN TRANSACTION;
UPDATE sessions SET price_kop = price_kop + 2000 WHERE id = 1;
SELECT id, price_kop FROM sessions WHERE id = 1;
ROLLBACK;
SELECT id, price_kop FROM sessions WHERE id = 1;

-- 10. Транзакція з підтвердженням
BEGIN TRANSACTION;
UPDATE sessions SET price_kop = price_kop + 1000 WHERE id = 4;
COMMIT;
SELECT id, price_kop FROM sessions WHERE id = 4;
