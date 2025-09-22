# Setup Instructions

## 🚀 Настройка автоматической публикации в npm

### 1. Создание npm токена

1. Зайдите на [npmjs.com](https://www.npmjs.com/)
2. Войдите в свой аккаунт
3. Перейдите в **Account** → **Access Tokens**
4. Нажмите **Generate New Token**
5. Выберите **Automation** (для CI/CD)
6. Скопируйте созданный токен

### 2. Настройка GitHub Secrets

1. Откройте ваш репозиторий на GitHub
2. Перейдите в **Settings** → **Secrets and variables** → **Actions**
3. Нажмите **New repository secret**
4. Добавьте секрет:
   - **Name**: `NPM_TOKEN`
   - **Secret**: вставьте токен из npm

### 3. Первоначальная настройка пакета

Убедитесь что в `package.json` указано правильное имя пакета:

```json
{
  "name": "@iskala00/styles",
  "version": "1.0.0"
}
```

### 4. Тестирование релиза

Перед первой публикацией протестируйте процесс:

```bash
# Dry run - покажет что будет опубликовано, но не публикует
bun run release:dry
```

### 5. Первый релиз

1. Сделайте коммит с conventional commit:
   ```bash
   git add .
   git commit -m "feat: initial release of SCSS styles library"
   git push origin main
   ```

2. GitHub Actions автоматически:
   - Соберет проект
   - Определит версию (1.0.0 → 1.1.0)
   - Создаст CHANGELOG.md
   - Опубликует в npm
   - Создаст GitHub release

## 📦 Проверка публикации

После успешной публикации пакет будет доступен:

- **npm**: `npm install @iskala00/styles`
- **GitHub**: релиз в разделе Releases
- **Changelog**: автоматически созданный CHANGELOG.md

## 🔄 Последующие релизы

Просто делайте коммиты используя conventional commits:

- `fix: исправление` → patch версия (1.1.0 → 1.1.1)
- `feat: новая функция` → minor версия (1.1.1 → 1.2.0)
- `feat!: breaking change` → major версия (1.2.0 → 2.0.0)

## ⚠️ Важные моменты

1. **Имя пакета**: Убедитесь что `@iskala00/styles` доступно в npm
2. **Права доступа**: У вас должны быть права на публикацию в @iskala00 scope
3. **Ветка**: Релизы происходят только из веток `main` или `master`
4. **Токен**: NPM_TOKEN должен иметь права на публикацию

## 🛠️ Troubleshooting

### Ошибка "Package already exists"
- Измените версию в package.json или имя пакета

### Ошибка "Insufficient privileges"  
- Проверьте права доступа к npm scope @iskala00
- Убедитесь что NPM_TOKEN корректный

### Ошибка "No release published"
- Проверьте что коммиты следуют conventional commits format
- Убедитесь что есть изменения для релиза
