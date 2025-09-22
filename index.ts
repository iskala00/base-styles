// Экспорт путей к SCSS файлам для использования в проектах
export const stylePaths = {
  main: "./src/index.scss",
  root: "./src/base/_root.scss",
  settings: "./src/base/_settings.scss",
} as const;

// Простая функция-заглушка для TypeScript
export const initStyles = () => {
  console.log("Styles library initialized");
};
