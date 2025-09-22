# SCSS Styles Library

Библиотека стилей, собранная с помощью tsup и Sass, совместимая с Dart Sass 3.0.0.

## Установка

```bash
# Установка пакета
npm install @iskala00/styles
# или
yarn add @iskala00/styles
# или
bun add @iskala00/styles
```

## Разработка

```bash
# Клонирование и установка зависимостей
git clone <repo-url>
cd styles
bun install
```

## Сборка

```bash
# Разовая сборка
bun run build

# Сборка с отслеживанием изменений
bun run dev

# Очистка директории dist
bun run clean
```

## Структура проекта

```
src/
├── base/
│   ├── _root.scss      # CSS переменные (:root)
│   └── _settings.scss  # SCSS переменные (зависимые от CSS переменных)
├── components/         # Компоненты (пусто)
├── themes/            # Темы (пусто)  
├── utils/             # Утилиты (пусто)
└── index.scss         # Главный файл стилей
```

## Использование

### В проекте с bundler (Vite, Webpack, etc.)

```scss
// Импорт всех стилей
@use 'styles/src/index.scss';

// Или импорт отдельных модулей
@use 'styles/src/base/settings' as *;
@use 'styles/src/base/root';
```

### Готовый скомпилированный CSS

```html
<link rel="stylesheet" href="node_modules/styles/dist/index.css">
```

### В TypeScript/JavaScript

```typescript
import { stylePaths, initStyles } from 'styles';

// Получение путей к SCSS файлам
console.log(stylePaths.main);     // './src/index.scss'
console.log(stylePaths.root);     // './src/base/_root.scss'  
console.log(stylePaths.settings); // './src/base/_settings.scss'

// Инициализация (опционально)
initStyles();
```

## Особенности

- ✅ Совместимость с Dart Sass 3.0.0 (использует `@use` вместо `@import`)
- ✅ CSS переменные в `:root` для динамического изменения
- ✅ SCSS переменные для удобства разработки
- ✅ TypeScript поддержка
- ✅ Современный синтаксис SCSS
- ✅ Адаптивная типографика с `clamp()`
- ✅ Гибкая система контейнеров

## CSS переменные

Все основные значения доступны как CSS переменные:

```css
:root {
  --font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-size-base: 1rem;
  --font-weight-normal: 400;
  --line-height-normal: 1.5;
  --spacing-md: 1rem;
  --transition-fast: 150ms ease-in-out;
  /* и многие другие... */
}
```

## Стили по умолчанию

Библиотека включает:

- CSS Reset (box-sizing, margins, paddings)
- Базовые стили для HTML элементов
- Адаптивная типографика для заголовков
- Система контейнеров с брейкпоинтами
- Стили для ссылок и интерактивных элементов

## Разработка

Библиотека использует современный подход с CSS переменными в `:root` и SCSS переменными, которые на них ссылаются. Это позволяет:

1. Динамически изменять стили через JavaScript
2. Использовать удобный SCSS синтаксис при разработке
3. Поддерживать темизацию

## Релизы

Проект использует автоматическую публикацию через [semantic-release](https://github.com/semantic-release/semantic-release):

- **Patch** (1.0.1): `fix:` коммиты
- **Minor** (1.1.0): `feat:` коммиты  
- **Major** (2.0.0): коммиты с `BREAKING CHANGE:` или `!`

### Как сделать релиз

1. Сделайте коммит используя [Conventional Commits](https://www.conventionalcommits.org/):
   ```bash
   git commit -m "feat: add new spacing variables"
   ```

2. Запушьте в `main` ветку:
   ```bash
   git push origin main
   ```

3. GitHub Actions автоматически:
   - Определит тип релиза
   - Обновит версию в package.json
   - Создаст CHANGELOG.md
   - Опубликует в npm
   - Создаст GitHub release

## Лицензия

MIT