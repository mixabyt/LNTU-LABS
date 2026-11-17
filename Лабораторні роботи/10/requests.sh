#!/bin/bash
# Лабораторна робота №10 — колекція з 12 HTTP-запитів, виконаних через curl.
# Запуск: bash requests.sh  (відповіді зберігаються в папці responses/)
BASE=https://httpbin.org
OUT=responses
mkdir -p "$OUT"

JSON_ITEM='{"title":"Деруни з грибами","category":"main","price":145,"available":true,"published":{"year":2026,"month":11,"day":17},"tags":["вегетаріанське","гаряче"]}'

run() { # run <назва> <curl-аргументи...>
  local name="$1"; shift
  echo "### $name"
  curl -sS -i "$@" > "$OUT/$name.txt" 2>&1
  head -1 "$OUT/$name.txt"
}

run "01 GET — базовий" "$BASE/get"
run "02 GET — параметри й заголовки" -G "$BASE/get" \
  --data-urlencode "title=Деруни з грибами" --data-urlencode "category=main" \
  --data-urlencode "limit=3" --data-urlencode "language=uk" \
  -H "Accept: application/json" -H "X-Lab-Topic: 10"
run "03 POST — URL-encoded form" -X POST "$BASE/post" \
  --data-urlencode "title=Деруни з грибами" --data-urlencode "category=main" --data-urlencode "price=145"
run "04 POST — Multipart Form" -X POST "$BASE/post" \
  -F "title=Деруни з грибами" -F "category=main" -F "price=145"
run "05 POST — JSON" -X POST "$BASE/post?source=lab10" \
  -H "Content-Type: application/json" -H "Accept: application/json" --data "$JSON_ITEM"
run "06 PUT — представлення" -X PUT "$BASE/put" \
  -H "Content-Type: application/json" --data "$JSON_ITEM"
run "07 PATCH — зміна ціни" -X PATCH "$BASE/patch" \
  -H "Content-Type: application/json" --data '{"price":155}'
run "08 DELETE — echo" -X DELETE "$BASE/delete"
run "09 GET — 204" "$BASE/status/204"
run "10 GET — 404" "$BASE/status/404"
run "11 GET — 500" "$BASE/status/500"
run "12 GET — метод не дозволено" "$BASE/post"
