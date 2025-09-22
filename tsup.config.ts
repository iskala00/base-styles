import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  sourcemap: true,
  minify: false,
  external: [],
  // Копируем SCSS файлы в dist для использования в других проектах
  onSuccess: async () => {
    const { execSync } = await import("child_process");

    // Компилируем SCSS в CSS
    execSync("sass src:dist --no-source-map --style=compressed", {
      stdio: "inherit",
    });

    // Копируем исходные SCSS файлы с сохранением структуры папок
    // Используем rsync для macOS совместимости
    execSync(
      "rsync -a --include='*/' --include='*.scss' --exclude='*' src/ dist/",
      {
        stdio: "inherit",
      }
    );
  },
});
