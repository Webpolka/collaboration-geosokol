# Start Template: Gulp + WebPack + ESBuild-Loader


## Для работы используйте такие команды

- Для установки всех зависимостей: `npm install`;
- старт `gulp` 

## Что умеет ?

- собирает SCSS файлы, добавляет вендорные префиксы;
- сортирует и группирует медиа-запросы;
- конвертирует шрифты в `.ttf`, и из `.ttf` в `woff/woff2`;
- создает файл для подключения шрифтов. Данный файл создается по такому пути: `src/scss/config/fonts.scss`, выглядит это так:

```scss
@font-face {
  font-family: Inter;
  font-display: swap;
  src: url('../fonts/Inter-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
}
```

