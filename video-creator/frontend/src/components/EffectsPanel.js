import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EffectsPanel({ project, selectedClip }) {
  const [effects, setEffects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEffects();
  }, []);

  const fetchEffects = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/effects');
      setEffects(response.data);
    } catch (error) {
      console.error('Ошибка загрузки эффектов:', error);
    } finally {
      setLoading(false);
    }
  };

  const effectCategories = {
    transition: '🔄 Переходы',
    filter: '🎨 Фильтры',
    animation: '✨ Анимация',
  };

  if (loading) {
    return <div className="p-4 text-center">⏳ Загрузка...</div>;
  }

  return (
    <div className="p-4">
      {!selectedClip && (
        <div className="text-center text-gray-400 py-8">
          <p>Выберите клип на временной шкале</p>
        </div>
      )}

      {Object.entries(effectCategories).map(([type, title]) => (
        <div key={type} className="mb-6">
          <h4 className="font-bold text-sm mb-3 text-gray-300">{title}</h4>
          <div className="space-y-2">
            {effects
              .filter(effect => effect.type === type)
              .map(effect => (
                <button
                  key={effect._id}
                  className="w-full text-left p-3 bg-gray-700 hover:bg-gray-600 rounded transition text-sm"
                  disabled={!selectedClip}
                >
                  {effect.name}
                </button>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default EffectsPanel;
