-- НЕ виконуйте весь файл за раз. Кожна команда повинна окремо завершитися відмовою.
PRAGMA foreign_keys = ON;
INSERT INTO tickets (session_id, seat_row, seat_number, buyer_name, paid_kop) VALUES (999, 1, 1, 'Тест', 10000); -- Неіснуючий сеанс: FOREIGN KEY.
INSERT INTO films (title, duration_min, age_rating, release_year) VALUES (NULL, 90, '12+', 2026);           -- NULL у назві: NOT NULL.
INSERT INTO sessions (film_id, hall, starts_at, price_kop) VALUES (1, 'Зал 1', '2026-11-25 18:00', 0);       -- Нульова ціна: CHECK.
INSERT INTO tickets (session_id, seat_row, seat_number, buyer_name, paid_kop) VALUES (1, 5, 10, 'Тест', 18000); -- Зайняте місце: UNIQUE.
