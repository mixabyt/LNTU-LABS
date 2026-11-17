-- Лабораторна робота №13. Варіант 3 — Кінотеатр (фільми, сеанси, квитки)
PRAGMA foreign_keys = ON;

-- Фільми, які показує кінотеатр
CREATE TABLE films (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL CHECK(length(trim(title)) > 0),
  duration_min INTEGER NOT NULL CHECK(duration_min > 0),
  age_rating TEXT NOT NULL CHECK(age_rating IN ('0+', '6+', '12+', '16+', '18+')),
  release_year INTEGER NOT NULL CHECK(release_year BETWEEN 1900 AND 2100)
);

-- Сеанси: показ одного фільму в певному залі в певний час
CREATE TABLE sessions (
  id INTEGER PRIMARY KEY,
  film_id INTEGER NOT NULL REFERENCES films(id),
  hall TEXT NOT NULL CHECK(length(trim(hall)) > 0),
  starts_at TEXT NOT NULL CHECK(starts_at GLOB '[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9] [0-9][0-9]:[0-9][0-9]'),
  price_kop INTEGER NOT NULL CHECK(price_kop > 0),       -- ціна в копійках
  is_3d INTEGER NOT NULL DEFAULT 0 CHECK(is_3d IN (0, 1)),
  UNIQUE(hall, starts_at)                                -- в одному залі не може бути двох сеансів одночасно
);

-- Квитки: одне місце на одному сеансі
CREATE TABLE tickets (
  id INTEGER PRIMARY KEY,
  session_id INTEGER NOT NULL REFERENCES sessions(id),
  seat_row INTEGER NOT NULL CHECK(seat_row BETWEEN 1 AND 20),
  seat_number INTEGER NOT NULL CHECK(seat_number BETWEEN 1 AND 30),
  buyer_name TEXT NOT NULL CHECK(length(trim(buyer_name)) > 0),
  paid_kop INTEGER NOT NULL CHECK(paid_kop >= 0),
  UNIQUE(session_id, seat_row, seat_number)              -- місце не можна продати двічі
);
