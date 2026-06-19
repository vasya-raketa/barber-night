'use client';

import { useCallback, useEffect, useState } from 'react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Timeline from '@/components/Timeline';
import { schedules } from '@/data';
import type { Tab } from '@/data';
import { getCardState } from '@/data';
import { useCurrentTime } from '@/hooks/useCurrentTime';

const tabs: Tab[] = ['glowna', 'friends', 'fastfade', 'stmnt'];

function isTab(value: string): value is Tab {
  return tabs.includes(value as Tab);
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('glowna');
  const currentTime = useCurrentTime();
  const events = schedules[activeTab];

  const activeEventId = events.find(
    (event) => getCardState(event, currentTime) === 'active'
  )?.id;

  useEffect(() => {
    const syncTabFromHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (isTab(hash)) {
        setActiveTab(hash);
      }
    };

    syncTabFromHash();
    window.addEventListener('hashchange', syncTabFromHash);
    return () => window.removeEventListener('hashchange', syncTabFromHash);
  }, []);

  useEffect(() => {
    if (!activeEventId) return;
    const el = document.getElementById(activeEventId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeEventId, activeTab]);

  const handleTabChange = useCallback((tab: Tab) => {
    setActiveTab(tab);
    window.history.replaceState(null, '', `#${tab}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <main className="min-h-screen pb-[120px]">
      <Header />
      <Timeline events={events} currentTime={currentTime} />
      <Navbar activeTab={activeTab} onTabChange={handleTabChange} />
    </main>
  );
}
