import React from 'react';
import { Link } from 'react-router-dom';

function NavbarVideo() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          🎬 VideoCreator
        </Link>

        <div className="flex gap-6 items-center">
          <Link to="/" className="text-gray-600 hover:text-black transition">
            Мои проекты
          </Link>
          <Link to="/templates" className="text-gray-600 hover:text-black transition">
            Шаблоны
          </Link>
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
            + Новый проект
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavbarVideo;
