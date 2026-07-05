const effectsSchema = [
  // Переходы
  { name: 'Fade', type: 'transition', category: 'fade', duration: 1 },
  { name: 'Slide Left', type: 'transition', category: 'slide', duration: 0.5 },
  { name: 'Slide Right', type: 'transition', category: 'slide', duration: 0.5 },
  { name: 'Zoom In', type: 'transition', category: 'zoom', duration: 0.5 },
  
  // Фильтры
  { name: 'Черно-белый', type: 'filter', category: 'grayscale', duration: 0 },
  { name: 'Сепия', type: 'filter', category: 'sepia', duration: 0 },
  { name: 'Размытие', type: 'filter', category: 'blur', duration: 0 },
  { name: 'Яркость', type: 'filter', category: 'brightness', duration: 0 },
  
  // Анимация
  { name: 'Shake', type: 'animation', category: 'shake', duration: 1 },
  { name: 'Bounce', type: 'animation', category: 'bounce', duration: 1 },
  { name: 'Rotate', type: 'animation', category: 'rotate', duration: 1 },
  { name: 'Scale', type: 'animation', category: 'scale', duration: 1 },
];

console.log('🎨 Эффекты для вставки в БД:');
console.log(JSON.stringify(effectsSchema, null, 2));
