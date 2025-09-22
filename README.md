# @iskala00/base-styles

🎨 Современная SCSS библиотека стилей с поддержкой CSS переменных и адаптивного дизайна.

[![npm version](https://badge.fury.io/js/@iskala00%2Fbase-styles.svg)](https://badge.fury.io/js/@iskala00%2Fbase-styles)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Особенности

- 🚀 **Современный SCSS** - совместимость с Dart Sass 3.0.0
- 🎯 **CSS переменные** - динамическое изменение стилей
- 📱 **Адаптивный дизайн** - готовые брейкпоинты и контейнеры
- 🎨 **Гибкая типографика** - адаптивные размеры шрифтов
- ⚡ **Легкий вес** - только необходимые стили
- 🔧 **Настраиваемый** - переопределение переменных через `@use`

## 📦 Установка

```bash
npm install @iskala00/base-styles
# или
yarn add @iskala00/base-styles
# или
pnpm add @iskala00/base-styles 
# или
bun add @iskala00/base-styles
```

## 🚀 Быстрый старт

### Подключение всех стилей

```scss
// Подключить все стили с настройками по умолчанию
@use '@iskala00/base-styles' as *;
```

### Подключение с переопределением переменных

```scss
// Подключить стили с кастомными настройками
@use '@iskala00/base-styles' with (
  $font-family: ('Roboto', sans-serif),
  $spacing-md: 1.5rem,
  $border-radius-md: 12px,
  $breakpoint-lg: 1024px
);
```

### Подключение готового CSS

```html
<!-- Подключить скомпилированный CSS -->
<link rel="stylesheet" href="node_modules/@iskala00/base-styles/dist/index.css">
```

## 🎨 Доступные переменные

### Типографика

```scss
$font-family: ('Inter', -apple-system, sans-serif) !default;
$font-family-heading: null !default; // наследует $font-family

// Размеры шрифтов
$font-size-xs: 0.75rem !default;    // 12px
$font-size-sm: 0.875rem !default;   // 14px  
$font-size-base: 1rem !default;     // 16px
$font-size-lg: 1.125rem !default;   // 18px
$font-size-xl: 1.25rem !default;    // 20px

// Веса шрифтов
$font-weight-normal: 400 !default;
$font-weight-medium: 500 !default;
$font-weight-semibold: 600 !default;
$font-weight-bold: 700 !default;
```

### Отступы

```scss
$spacing-xs: 0.25rem !default;  // 4px
$spacing-sm: 0.5rem !default;   // 8px
$spacing-md: 1rem !default;     // 16px
$spacing-lg: 1.5rem !default;   // 24px
$spacing-xl: 2rem !default;     // 32px
```

### Границы

```scss
$border-radius-sm: 4px !default;
$border-radius-md: 8px !default;
$border-radius-lg: 16px !default;
$border-radius-xl: 24px !default;
```

### Брейкпоинты

```scss
$breakpoint-xs: 320px !default;   // Мобильные
$breakpoint-sm: 567px !default;   // Маленькие планшеты
$breakpoint-md: 767px !default;   // Планшеты
$breakpoint-lg: 991px !default;   // Десктопы
$breakpoint-xl: 1350px !default;  // Большие экраны
```

## 📱 Что включено

### Базовые стили

- **CSS Reset** - нормализация стилей браузеров
- **Typography** - адаптивная типографика для заголовков
- **Container System** - гибкая система контейнеров
- **CSS Variables** - все переменные доступны как `--variable-name`

### Адаптивная типографика

Заголовки автоматически масштабируются:

```css
h1 { font-size: clamp(2rem, 4vw, 3rem); }      /* 32px - 48px */
h2 { font-size: clamp(1.75rem, 3.5vw, 2.5rem); } /* 28px - 40px */
h3 { font-size: clamp(1.5rem, 3vw, 2rem); }    /* 24px - 32px */
```

### Система контейнеров

```html
<div class="container">
  <!-- Контент автоматически центрируется с адаптивными отступами -->
</div>
```

## 🎯 Примеры использования

### Пример 1: Кастомная тема

```scss
@use '@iskala00/base-styles' with (
  // Темная тема
  $font-family: ('JetBrains Mono', monospace),
  $spacing-md: 2rem,
  $border-radius-md: 0, // Без скруглений
  $breakpoint-lg: 1200px
);

// Ваши дополнительные стили
.my-component {
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
  font-family: var(--font-family);
}
```

### Пример 2: Компактная тема

```scss
@use '@iskala00/base-styles' with (
  // Компактные отступы
  $spacing-xs: 0.125rem,
  $spacing-sm: 0.25rem,
  $spacing-md: 0.75rem,
  $spacing-lg: 1rem,
  
  // Маленькие радиусы
  $border-radius-sm: 2px,
  $border-radius-md: 4px,
  $border-radius-lg: 6px
);
```

### Пример 3: Использование в React/Vue

```tsx
// styles/globals.scss
@use '@iskala00/base-styles' with (
  $font-family: ('Inter', system-ui, sans-serif),
  $container-max-width-px: 1200px
);

// components/Button.module.scss  
.button {
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-md);
  font-family: var(--font-family);
  transition: var(--transition-fast);
}
```

## 🔧 Динамическое изменение через JavaScript

Все SCSS переменные доступны как CSS переменные:

```javascript
// Изменить тему во время выполнения
document.documentElement.style.setProperty('--spacing-md', '2rem');
document.documentElement.style.setProperty('--border-radius-md', '16px');

// Или массово
const theme = {
  '--font-family': 'Georgia, serif',
  '--spacing-md': '1.5rem',
  '--border-radius-md': '12px'
};

Object.entries(theme).forEach(([key, value]) => {
  document.documentElement.style.setProperty(key, value);
});
```

## 📋 CSS переменные

Все переменные автоматически доступны в CSS:

```css
:root {
  --font-family: "Inter", -apple-system, sans-serif;
  --font-size-base: 1rem;
  --spacing-md: 1rem;
  --border-radius-md: 8px;
  --breakpoint-lg: 991px;
  /* и многие другие... */
}
```

## 🛠️ Совместимость

- **Sass**: Dart Sass 1.93.0+
- **TypeScript**: 5.0+
- **Браузеры**: Современные браузеры с поддержкой CSS переменных
- **Фреймворки**: React, Vue, Angular, Svelte и другие
- **Сборщики**: Webpack, Vite, Parcel, Rollup
- **Среды выполнения**: Node.js, Bun

## 📚 Дополнительные ресурсы

- [📖 Документация](https://github.com/iskala00/base-styles#readme)
- [🐛 Сообщить о баге](https://github.com/iskala00/base-styles/issues)
- [💡 Предложить улучшение](https://github.com/iskala00/base-styles/issues)

## 📄 Лицензия

MIT © [iskala00](https://github.com/iskala00)