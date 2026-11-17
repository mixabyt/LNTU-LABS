# Little Lemon — лабораторна робота №11

Екран `RemoteMenu` завантажує меню з мережі, показує стани очікування, успіху, порожнього меню й помилки та дозволяє повторити запит.

## Запуск

```bash
npm install
npx tsc --noEmit
npx expo start
```

## Де знайти екран

Форма входу → «Увійти (демо)» → екран «Привітання» → кнопка **«Меню»** у заголовку → «Меню Little Lemon».

## Джерело даних

https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/menu-items-by-category.json

Ціни джерело подає без валюти, тому вони показуються як умовні одиниці («ум. од.»).

## Нові файли

| Файл | Призначення |
| --- | --- |
| `types/remoteMenu.ts` | Тип запису й стани завантаження |
| `api/remoteMenu.ts` | GET-запит, перевірка статусу та розбір JSON |
| `hooks/useRemoteMenu.ts` | Життєвий цикл запиту, скасування, тайм-аут, повторення |
| `screens/RemoteMenuScreen.tsx` | Відображення станів і списку |
| `data/remoteMenu.sample.json` | Локальний зразок для перевірки парсера |
