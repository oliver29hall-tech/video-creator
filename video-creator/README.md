# VideoCreator 🎬

Приложение для создания видео-роликов для социальных сетей.

## Возможности ✨

✅ **Для товаров** - демонстрация, как носить, примеры
✅ **Музыка и эффекты** - интеграция музыки, переходы, фильтры
✅ **Текст и фильтры** - добавление текста, цветовые эффекты
✅ **Экспорт везде** - YouTube, TikTok, Instagram, Facebook
✅ **Любые видео по запросу** - кастомные видео под ваш сценарий

## Установка

### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm start
```

## Структура проекта

```
video-creator/
├── backend/
│   ├── models/
│   │   ├── Project.js
│   │   ├── Template.js
│   │   └── Effect.js
│   ├── routes/
│   │   ├── projects.js
│   │   ├── templates.js
│   │   ├── effects.js
│   │   ├── videos.js
│   │   └── export.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── NavbarVideo.js
│   │   │   ├── Timeline.js
│   │   │   ├── EffectsPanel.js
│   │   │   ├── PreviewWindow.js
│   │   │   └── ExportPanel.js
│   │   ├── pages/
│   │   │   ├── Dashboard.js
│   │   │   ├── VideoEditor.js
│   │   │   └── Templates.js
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── index.css
│   │   └── public/
│   │       └── index.html
│   └── package.json
└── README.md
```

## API Endpoints 🔌

### Projects
- `GET /api/projects/:userId` - Получить все проекты
- `POST /api/projects` - Создать проект
- `GET /api/projects/view/:id` - Получить проект
- `PUT /api/projects/:id` - Обновить проект
- `DELETE /api/projects/:id` - Удалить проект

### Templates
- `GET /api/templates` - Получить все шаблоны
- `GET /api/templates/category/:category` - Получить по категории

### Effects
- `GET /api/effects` - Получить все эффекты
- `GET /api/effects/type/:type` - Получить по типу

### Export
- `POST /api/export/video/:projectId` - Экспортировать видео
- `POST /api/export/export/:projectId` - Экспорт на платформы

## Требования 📋

- Node.js 14+
- MongoDB
- FFmpeg
- React 18+

## Автор

oliver29hall-tech

## Лицензия

GPL-3.0
