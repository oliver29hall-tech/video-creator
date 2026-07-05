import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Templates() {
  const [templates, setTemplates] = useState([]);
  const [category, setCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTemplates();
  }, [category]);

  const fetchTemplates = async () => {
    try {
      if (category === 'all') {
        const response = await axios.get('http://localhost:5001/api/templates');
        setTemplates(response.data);
      } else {
        const response = await axios.get(`http://localhost:5001/api/templates/category/${category}`);
        setTemplates(response.data);
      }
    } catch (error) {
      console.error('Ошибка загрузки шаблонов:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { id: 'all', name: '📦 Все шаблоны' },
    { id: 'product-demo', name: '🛍️ Демо товара' },
    { id: 'how-to-wear', name: '👗 Как носить' },
    { id: 'review', name: '⭐ Обзор' },
    { id: 'promo', name: '🎉 Промо' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Шаблоны видео</h1>

        {/* Фильтры */}
        <div className="flex gap-3 mb-12 overflow-x-auto pb-4">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-bold transition whitespace-nowrap ${
                category === cat.id
                  ? 'bg-black text-white'
                  : 'bg-white text-black border border-gray-200 hover:border-black'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="text-2xl">⏳ Загрузка шаблонов...</div>
          </div>
        ) : templates.length === 0 ? (
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <div className="text-6xl mb-4">📭</div>
            <h2 className="text-2xl font-bold mb-2">Шаблоны не найдены</h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map(template => (
              <div key={template._id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="w-full h-40 bg-gray-200 flex items-center justify-center relative">
                  {template.thumbnail ? (
                    <img src={template.thumbnail} alt={template.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-5xl">🎬</span>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition flex items-center justify-center cursor-pointer">
                    <span className="text-white text-3xl opacity-0 hover:opacity-100">▶️</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{template.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{template.description}</p>
                  <div className="flex gap-2 mb-4">
                    {template.tags?.map(tag => (
                      <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition font-bold">
                    Использовать шаблон
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Templates;
