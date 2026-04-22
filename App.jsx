import React, { useState } from 'react';
import { DashboardLayout } from './components/DashboardLayout';
import { ProfileCard } from './components/ProfileCard';
import { NextBattleCard } from './components/NextBattleCard';
import { StatsGrid } from './components/StatsGrid';
import { DrillStation } from './components/DrillStation';
import { ArchiveList } from './components/ArchiveList';
import { FloatingSupport } from './components/FloatingSupport';

function App() {
  const [userData] = useState({
    name: 'Youssef',
    level: 'Intermediate',
    streak: 12,
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Youssef',
    stats: {
      hoursSpent: 24,
      drillsCompleted: 36,
      progressPercent: 42
    },
    nextSession: {
      date: '2026-04-25',
      time: '19:00',
      topic: 'Professional Email Writing',
      zoomLink: 'https://zoom.us/j/example'
    }
  });

  return (
    <DashboardLayout>
      <ProfileCard 
        name={userData.name}
        level={userData.level}
        streak={userData.streak}
        avatarUrl={userData.avatarUrl}
      />
      
      <NextBattleCard 
        date={userData.nextSession.date}
        time={userData.nextSession.time}
        topic={userData.nextSession.topic}
        zoomLink={userData.nextSession.zoomLink}
      />
      
      <StatsGrid stats={userData.stats} />
      
      <DrillStation />
      
      <ArchiveList />
      
      <FloatingSupport />
    </DashboardLayout>
  );
}

export default App;
