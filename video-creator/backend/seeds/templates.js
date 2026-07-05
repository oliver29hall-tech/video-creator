const templateSchema = [
  {
    name: 'Демо товара - Быстро',
    description: 'Быстрое демонстрирование товара (15 сек)',
    category: 'product-demo',
    duration: 15,
    width: 1080,
    height: 1920,
    fps: 30,
    clips: [
      { type: 'video', duration: 5, position: { x: 0, y: 0 } },
      { type: 'text', content: 'Смотрите наш новый товар!', duration: 5 },
      { type: 'video', duration: 5, position: { x: 0, y: 0 } },
    ],
    tags: ['товар', 'короткое', 'промо']
  },
  {
    name: 'Как носить - Гайд',
    description: 'Полный гайд как правильно носить (30 сек)',
    category: 'how-to-wear',
    duration: 30,
    width: 1080,
    height: 1920,
    fps: 30,
    clips: [
      { type: 'video', duration: 10 },
      { type: 'text', content: 'Совет #1: ...', duration: 5 },
      { type: 'video', duration: 10 },
      { type: 'text', content: 'Совет #2: ...', duration: 5 },
    ],
    tags: ['гайд', 'стиль', 'советы']
  },
  {
    name: 'Обзор товара - Pro',
    description: 'Профессиональный обзор с деталями (45 сек)',
    category: 'review',
    duration: 45,
    width: 1920,
    height: 1080,
    fps: 30,
    clips: [
      { type: 'video', duration: 10 },
      { type: 'text', content: 'Материал: 100% хлопок', duration: 5 },
      { type: 'video', duration: 10 },
      { type: 'text', content: 'Размеры: XS-XXL', duration: 5 },
      { type: 'video', duration: 15 },
    ],
    tags: ['обзор', 'подробно', 'характеристики']
  },
  {
    name: 'Промо - Скидка',
    description: 'Рекламный ролик на скидку (10 сек)',
    category: 'promo',
    duration: 10,
    width: 1080,
    height: 1920,
    fps: 30,
    clips: [
      { type: 'text', content: '🎉 СКИДКА 50%', duration: 3 },
      { type: 'video', duration: 4 },
      { type: 'text', content: 'Только сегодня!', duration: 3 },
    ],
    tags: ['промо', 'скидка', 'быстро']
  }
];

console.log('📋 Шаблоны для вставки в БД:');
console.log(JSON.stringify(templateSchema, null, 2));
