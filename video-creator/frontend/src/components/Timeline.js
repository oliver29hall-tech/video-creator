import React from 'react';

function Timeline({ project, selectedClip, setSelectedClip }) {
  if (!project?.clips || project.clips.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center text-gray-500">
        <div className="text-center">
          <div className="text-3xl mb-2">📹</div>
          <p>Перетащите видео или изображения сюда</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full p-4">
      <h3 className="text-sm font-bold mb-3 text-gray-300">📹 Временная шкала</h3>
      <div className="flex gap-2 overflow-x-auto pb-4">
        {project.clips.map(clip => (
          <div
            key={clip.id}
            onClick={() => setSelectedClip(clip.id)}
            className={`flex-shrink-0 w-20 h-20 rounded cursor-pointer transition ${
              selectedClip === clip.id ? 'ring-2 ring-yellow-500' : 'hover:ring-2 hover:ring-gray-500'
            } ${clip.type === 'video' ? 'bg-blue-600' : clip.type === 'image' ? 'bg-green-600' : 'bg-purple-600'}`}
          >
            <div className="w-full h-full flex items-center justify-center text-white text-2xl">
              {clip.type === 'video' ? '🎥' : clip.type === 'image' ? '🖼️' : '📝'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
