import React from 'react';

export function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header with Lingo branding */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#5170ff] flex items-center justify-center">
            <span className="text-white text-xl">👋</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight">Lingo</h1>
        </div>
      </header>
      
      {/* Main content */}
      <main className="px-5 py-6 space-y-6 max-w-md mx-auto">
        {children}
      </main>
    </div>
  );
}
