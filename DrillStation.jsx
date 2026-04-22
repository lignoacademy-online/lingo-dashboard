import React, { useState } from 'react';

export function DrillStation() {
  const [drills, setDrills] = useState([
    {
      id: 1,
      title: 'Introduce Yourself',
      duration: '5 min',
      prompt: 'Record yourself introducing who you are, what you do, and your goals.',
      completed: false
    },
    {
      id: 2,
      title: 'Describe Your Day',
      duration: '3 min',
      prompt: 'Speak for 60 seconds about what you did today.',
      completed: false
    },
    {
      id: 3,
      title: 'Opinion Drill',
      duration: '5 min',
      prompt: 'Share your opinion on: "Should students learn English early?"',
      completed: false
    },
    {
      id: 4,
      title: 'Pronunciation Challenge',
      duration: '2 min',
      prompt: 'Read aloud: "She sells seashells by the seashore."',
      completed: true
    }
  ]);

  const toggleDrill = (id) => {
    setDrills(drills.map(drill => 
      drill.id === id ? { ...drill, completed: !drill.completed } : drill
    ));
  };

  const completedCount = drills.filter(d => d.completed).length;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold">Drill Station</h3>
        <span className="text-sm text-gray-600">
          {completedCount}/{drills.length} Done
        </span>
      </div>
      
      <div className="space-y-3">
        {drills.map(drill => (
          <div 
            key={drill.id}
            className={`
              rounded-xl p-4 border-2 transition-all duration-300
              ${drill.completed 
                ? 'bg-[#5170ff] border-[#5170ff] text-white' 
                : 'bg-white border-gray-200 hover:border-gray-300'
              }
            `}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <h4 className={`font-bold mb-1 ${drill.completed ? 'text-white' : 'text-gray-900'}`}>
                  {drill.title}
                </h4>
                <p className={`text-sm ${drill.completed ? 'text-blue-100' : 'text-gray-600'}`}>
                  {drill.prompt}
                </p>
              </div>
              <span className={`
                text-xs font-medium px-2 py-1 rounded-full ml-3 whitespace-nowrap
                ${drill.completed ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'}
              `}>
                {drill.duration}
              </span>
            </div>
            
            <button
              onClick={() => toggleDrill(drill.id)}
              className={`
                w-full mt-3 py-2.5 rounded-lg font-medium text-sm
                transition-all duration-200 active:scale-98
                ${drill.completed 
                  ? 'bg-white/20 text-white hover:bg-white/30' 
                  : 'bg-[#5170ff] text-white hover:bg-[#3d58cc]'
                }
              `}
            >
              {drill.completed ? '✓ Completed' : 'Unfreeze Your Tongue →'}
            </button>
          </div>
        ))}
      </div>
      
      {/* Motivational footer */}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500" dir="rtl">
          كل دقيقة تتكلم، قدام خطوة! Every minute counts.
        </p>
      </div>
    </div>
  );
}
