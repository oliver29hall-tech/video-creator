import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Timeline from '../components/Timeline';
import EffectsPanel from '../components/EffectsPanel';
import PreviewWindow from '../components/PreviewWindow';
import ExportPanel from '../components/ExportPanel';

function VideoEditor() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [activePanel, setActivePanel] = useState('timeline');
  const [selectedClip, setSelectedClip] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProject();
  }, [projectId]);

  const fetchProject = async () => {
    try {
      const response = await axios.get(`http://localhost:5001/api/projects/view/${projectId}`);
      setProject(response.data);
    } catch (error) {
      console.error('Ошибка загрузки проекта:', error);
      alert('❌ Проект не найден');
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl">⏳ Загрузка проекта...</div>
      </div>
    );
  }

  if (!project) return null;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex h-screen">
        {/* Левая панель - Редактор */}
        <div className="flex-1 flex flex-col">
          {/* Заголовок */}
          <div className="bg-gray-800 border-b border-gray-700 p-4 flex justify-between items-center">
            <h2 className="text-xl font-bold">{project.title}</h2>
            <button
              onClick={() => navigate('/')}
              className="text-gray-400 hover:text-white transition"
            >
              ✕ Закрыть
            </button>
          </div>

          {/* Основной редактор */}
          <div className="flex-1 flex overflow-hidden">
            {/* Превью видео */}
            <div className="flex-1 bg-black flex items-center justify-center border-r border-gray-700">
              <PreviewWindow project={project} />
            </div>

            {/* Панели инструментов */}
            <div className="w-80 bg-gray-800 border-l border-gray-700 overflow-y-auto">
              <div className="flex border-b border-gray-700">
                <button
                  onClick={() => setActivePanel('effects')}
                  className={`flex-1 py-3 font-bold transition ${
                    activePanel === 'effects'
                      ? 'bg-black border-b-2 border-yellow-500'
                      : 'hover:bg-gray-700'
                  }`}
                >
                  ✨ Эффекты
                </button>
                <button
                  onClick={() => setActivePanel('export')}
                  className={`flex-1 py-3 font-bold transition ${
                    activePanel === 'export'
                      ? 'bg-black border-b-2 border-yellow-500'
                      : 'hover:bg-gray-700'
                  }`}
                >
                  📤 Экспорт
                </button>
              </div>

              {activePanel === 'effects' && (
                <EffectsPanel project={project} selectedClip={selectedClip} />
              )}
              {activePanel === 'export' && (
                <ExportPanel projectId={projectId} />
              )}
            </div>
          </div>

          {/* Временная шкала */}
          <div className="h-48 bg-gray-800 border-t border-gray-700 overflow-x-auto">
            <Timeline project={project} selectedClip={selectedClip} setSelectedClip={setSelectedClip} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoEditor;
