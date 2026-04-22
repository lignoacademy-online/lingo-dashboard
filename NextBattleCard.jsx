import React from 'react';

export function NextBattleCard({ date, time, topic, zoomLink }) {
  // Format date in a friendly way
  const formatDate = (dateStr) => {
    const options = { weekday: 'long', month: 'short', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString('en-US', options);
  };

  // Calculate countdown
  const getCountdown = () => {
    const now = new Date();
    const sessionDate = new Date(`${date}T${time}`);
    const diffHours = Math.floor((sessionDate - now) / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);
    
    if (diffDays > 0) {
      return `In ${diffDays} day${diffDays > 1 ? 's' : ''}`;
    } else if (diffHours > 0) {
      return `In ${diffHours} hour${diffHours > 1 ? 's' : ''}`;
    } else {
      return 'Starting soon!';
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff66c4] via-[#ff66c4] to-[#ff4db8] rounded-2xl"></div>
      
      {/* Animated pulse effect */}
      <div className="absolute inset-0 bg-white/10 rounded-2xl animate-pulse"></div>
      
      {/* Content */}
      <div className="relative p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
            <span className="text-white/90 text-sm font-medium uppercase tracking-wider">
              Next Battle
            </span>
          </div>
          <span className="text-white/80 text-xs font-medium bg-white/20 px-3 py-1 rounded-full">
            {getCountdown()}
          </span>
        </div>
        
        {/* Topic - The hero */}
        <h3 className="text-white text-2xl font-bold mb-4 leading-tight">
          {topic}
        </h3>
        
        {/* Date & Time */}
        <div className="flex items-center gap-4 mb-6 text-white/90">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-medium">{formatDate(date)}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium">{time}</span>
          </div>
        </div>
        
        {/* CTA Button */}
        <button 
          onClick={() => window.open(zoomLink, '_blank')}
          className="w-full bg-white text-[#ff66c4] font-bold py-4 rounded-xl 
                     hover:bg-gray-50 active:scale-98 transition-all duration-200
                     shadow-lg shadow-black/10 text-lg"
        >
          Join Battle Now →
        </button>
        
        {/* Bilingual micro-copy */}
        <p className="text-center text-white/70 text-xs mt-3" dir="rtl">
          استعد للمعركة! Get ready to speak.
        </p>
      </div>
    </div>
  );
}
