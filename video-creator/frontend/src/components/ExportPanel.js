import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ExportPanel({ projectId }) {
  const [exporting, setExporting] = useState(false);
  const [selectedPlatforms, setSelectedPlatforms] = useState({
    youtube: true,
    tiktok: false,
    instagram: false,
    facebook: false,
  });

  const platforms = [
    { id: 'youtube', name: '▶️ YouTube', res: '1920x1080' },
    { id: 'tiktok', name: '🎵 TikTok', res: '1080x1920' },
    { id: 'instagram', name: '📷 Instagram', res: '1080x1350' },
    { id: 'facebook', name: '👥 Facebook', res: '1200x628' },
  ];

  const togglePlatform = (platform) => {
    setSelectedPlatforms(prev => ({
      ...prev,
      [platform]: !prev[platform]
    }));
  };

  const handleExport = async () => {
    try {
      setExporting(true);
      const platformList = Object.keys(selectedPlatforms).filter(p => selectedPlatforms[p]);
      
      if (platformList.length === 0) {
        alert('❌ Выберите хотя бы ��дну платформу');
        setExporting(false);
        return;
      }

      const response = await axios.post(`http://localhost:5001/api/export/export/${projectId}`, {
        platforms: platformList,
      });

      alert(`✅ Видео успешно экспортировано на ${platformList.length} платформ(е)`);
      console.log(response.data);
    } catch (error) {
      alert('❌ Ошибка при экспорте');
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="p-4">
      <h3 className="font-bold text-sm mb-4">Выберите платформы для экспорта:</h3>
      
      <div className="space-y-3 mb-6">
        {platforms.map(platform => (
          <label key={platform.id} className="flex items-center gap-3 cursor-pointer p-2 hover:bg-gray-700 rounded transition">
            <input
              type="checkbox"
              checked={selectedPlatforms[platform.id]}
              onChange={() => togglePlatform(platform.id)}
              className="w-4 h-4"
            />
            <div className="flex-1">
              <div className="font-bold text-sm">{platform.name}</div>
              <div className="text-xs text-gray-400">{platform.res}</div>
            </div>
          </label>
        ))}
      </div>

      <button
        onClick={handleExport}
        disabled={exporting}
        className="w-full bg-yellow-500 text-black py-3 rounded font-bold hover:bg-yellow-600 transition disabled:opacity-50"
      >
        {exporting ? '⏳ Экспортирование...' : '📤 Экспортировать'}
      </button>

      <div className="mt-4 p-3 bg-gray-700 rounded text-xs text-gray-300">
        <p className="font-bold mb-2">💡 Совет:</p>
        <p>Экспорт автоматически оптимизирует видео для каждой платформы с нужным разрешением и форматом.</p>
      </div>
    </div>
  );
}

export default ExportPanel;
