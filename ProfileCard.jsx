import React from 'react';

export function ProfileCard({ name, level, streak, avatarUrl }) {
  return (
    <div className="bg-gradient-to-br from-[#5170ff] to-[#3d58cc] rounded-2xl p-6 text-white">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <img 
            src={avatarUrl} 
            alt={name}
            className="w-16 h-16 rounded-full bg-white p-1"
          />
          <div>
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-blue-100 text-sm mt-1">{level}</p>
          </div>
        </div>
        
        {/* Streak badge */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 text-center min-w-[80px]">
          <div className="text-2xl font-bold">{streak}</div>
          <div className="text-xs text-blue-100 mt-1">Days Speaking</div>
        </div>
      </div>
      
      {/* Motivational tagline */}
      <div className="mt-4 pt-4 border-t border-white/20">
        <p className="text-sm text-blue-50">
          Keep the fire burning, {name}! 🔥
        </p>
      </div>
    </div>
  );
}
