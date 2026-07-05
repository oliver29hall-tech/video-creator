import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      // Временно используем ID 1
      const response = await axios.get('http://localhost:5001/api/projects/1');
      setProjects(response.data);
    } catch (error) {
      console.error('Ошибка загрузки проектов:', error);
    } finally {
      setLoading(false);
    }
  };

  const createNewProject = async () => {
    try {
      const newProject = {
        title: `Проект ${new Date().toLocaleString()}`,
        description: 'Новый видео-проект',
        userId: '1',
      };
      const response = await axios.post('http://localhost:5001/api/projects', newProject);
      setProjects([response.data, ...projects]);
    } catch (error) {
      alert('❌ Ошибка при создании проекта');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Мои проекты</h1>
          <button
            onClick={createNewProject}
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            + Новый проект
          </button>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="text-2xl">⏳ Загрузка...</div>
          </div>
        ) : projects.length === 0 ? (
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <div className="text-6xl mb-4">🎬</div>
            <h2 className="text-2xl font-bold mb-4">У вас еще нет проектов</h2>
            <p className="text-gray-600 mb-6">Создайте первый проект и начните создавать видео</p>
            <button
              onClick={createNewProject}
              className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Создать проект
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <Link
                key={project._id}
                to={`/editor/${project._id}`}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105"
              >
                <div className="w-full h-40 bg-gray-200 flex items-center justify-center">
                  {project.thumbnail ? (
                    <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-5xl">🎬</span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">
                      {new Date(project.createdAt).toLocaleDateString('ru-RU')}
                    </span>
                    <span className={`px-3 py-1 rounded text-xs font-bold text-white ${
                      project.status === 'completed' ? 'bg-green-500' :
                      project.status === 'processing' ? 'bg-blue-500' :
                      'bg-yellow-500'
                    }`}>
                      {project.status === 'completed' ? '✅' :
                       project.status === 'processing' ? '⏳' :
                       '📝'} {project.status}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
