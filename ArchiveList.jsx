import React, { useState } from 'react';

export function ArchiveList() {
  const [sessions] = useState([
    {
      id: 1,
      date: '2026-04-20',
      topic: 'Job Interview Prep',
      recordingUrl: 'https://zoom.us/rec/example1',
      vocabulary: ['Resume', 'Qualifications', 'Experience', 'References', 'Salary']
    },
    {
      id: 2,
      date: '2026-04-18',
      topic: 'Small Talk & Networking',
      recordingUrl: 'https://zoom.us/rec/example2',
      vocabulary: ['Connections', 'Industry', 'Follow-up', 'Casual', 'Rapport']
    },
    {
      id: 3,
      date: '2026-04-15',
      topic: 'Phone Conversations',
      recordingUrl: 'https://zoom.us/rec/example3',
      vocabulary: ['Voicemail', 'Clarify', 'Hold', 'Transfer', 'Message']
    }
  ]);

  const [expandedVocab, setExpandedVocab] = useState(null);

  const formatDate = (dateStr) => {
    const options = { month: 'short', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString('en-US', options);
  };

  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Archive & Recordings</h3>
      
      <div className="space-y-3">
        {sessions.map(session => (
          <div key={session.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-gray-500 uppercase">
                      {formatDate(session.date)}
                    </span>
                  </div>
                  <h4 className="font-bold text-gray-900">
                    {session.topic}
                  </h4>
                </div>
                <button
                  onClick={() => window.open(session.recordingUrl, '_blank')}
                  className="flex items-center gap-1.5 bg-[#5170ff] text-white 
                           px-3 py-1.5 rounded-lg text-sm font-medium
                           hover:bg-[#3d58cc] active:scale-95 transition-all ml-3"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                  </svg>
                  Watch
                </button>
              </div>
              
              <button
                onClick={() => setExpandedVocab(expandedVocab === session.id ? null : session.id)}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                <svg 
                  className={`w-4 h-4 transition-transform ${expandedVocab === session.id ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                Key Vocabulary ({session.vocabulary.length})
              </button>
            </div>
            
            {/* Expandable vocabulary section */}
            {expandedVocab === session.id && (
              <div className="px-4 pb-4 pt-2 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  {session.vocabulary.map((word, idx) => (
                    <span 
                      key={idx}
                      className="bg-[#5170ff]/10 text-[#5170ff] px-3 py-1.5 rounded-lg text-sm font-medium"
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
