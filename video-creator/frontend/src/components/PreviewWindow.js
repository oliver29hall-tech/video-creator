import React from 'react';

function PreviewWindow({ project }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black">
      <div className="text-center">
        <div className="text-6xl mb-4">🎬</div>
        <h2 className="text-2xl font-bold mb-2">{project?.title}</h2>
        <p className="text-gray-400 mb-6">Превью видео</p>
        
        <div className="bg-gray-800 rounded-lg p-8 w-80">
          <div className="aspect-video bg-gray-700 rounded mb-4 flex items-center justify-center">
            <span className="text-4xl">📹</span>
          </div>
          <div className="space-y-2 text-left">
            <p className="text-sm text-gray-400">
              <span className="font-bold">Размер:</span> {project?.width}x{project?.height}
            </p>
            <p className="text-sm text-gray-400">
              <span className="font-bold">FPS:</span> {project?.fps}
            </p>
            <p className="text-sm text-gray-400">
              <span className="font-bold">Клипов:</span> {project?.clips?.length || 0}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewWindow;
