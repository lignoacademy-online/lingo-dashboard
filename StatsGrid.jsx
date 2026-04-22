import React from 'react';

export function StatsGrid({ stats }) {
  const { hoursSpent, drillsCompleted, progressPercent } = stats;
  
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Your Evolution</h3>
      
      <div className="grid grid-cols-2 gap-3">
        {/* Hours Spent */}
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
          <div className="text-3xl font-bold text-[#5170ff] mb-1">
            {hoursSpent}
          </div>
          <div className="text-xs text-gray-600 uppercase tracking-wide">
            Hours Speaking
          </div>
          <div className="mt-3 h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#5170ff] rounded-full transition-all duration-500"
              style={{ width: `${Math.min((hoursSpent / 30) * 100, 100)}%` }}
            ></div>
          </div>
        </div>
        
        {/* Drills Completed */}
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
          <div className="text-3xl font-bold text-[#ff66c4] mb-1">
            {drillsCompleted}
          </div>
          <div className="text-xs text-gray-600 uppercase tracking-wide">
            Drills Crushed
          </div>
          <div className="mt-3 h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#ff66c4] rounded-full transition-all duration-500"
              style={{ width: `${Math.min((drillsCompleted / 50) * 100, 100)}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      {/* Overall Progress - Full width */}
      <div className="mt-3 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-5 border border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-gray-700">3-Month Goal</span>
          <span className="text-2xl font-bold text-gray-900">{progressPercent}%</span>
        </div>
        <div className="h-3 bg-white rounded-full overflow-hidden border border-gray-200">
          <div 
            className="h-full bg-gradient-to-r from-[#5170ff] to-[#ff66c4] rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Keep pushing! You're {100 - progressPercent}% away from fluency.
        </p>
      </div>
    </div>
  );
}
