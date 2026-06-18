'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Timeline from '@/components/Timeline';
import { schedules } from '@/data';
import type { Tab } from '@/data';
import { useCurrentTime } from '@/hooks/useCurrentTime';

const headerTitleClass =
  'm-0 font-sans text-[4.125rem] font-bold uppercase leading-[0.8] tracking-[-0.12375rem] text-white';

const headerBrandClass =
  'font-sans text-[2.09375rem] font-bold uppercase leading-[0.8] tracking-[-0.06281rem] text-white';

const tabs: Tab[] = ['glowna', 'friends', 'fastfade'];

function isTab(value: string): value is Tab {
  return tabs.includes(value as Tab);
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('glowna');
  const currentTime = useCurrentTime();
  const events = schedules[activeTab];

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

  const handleTabChange = useCallback((tab: Tab) => {
    setActiveTab(tab);
    window.history.replaceState(null, '', `#${tab}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <main className="min-h-screen pb-[120px]">
      <header className="mx-auto flex h-auto w-full max-w-content shrink-0 flex-col items-start gap-[0.75rem] bg-black p-5">
        <div className="flex w-full items-end justify-between self-stretch">
          <div>
            <p className={headerTitleClass}>BARBER</p>
            <p className={headerTitleClass}>NIGHT</p>
          </div>
          <p className={headerTitleClass}>S6</p>
        </div>

        <div className="flex w-full shrink-0 items-end justify-between self-stretch">
          <div className="flex items-end gap-x-3">
            <span className={headerBrandClass}>POWERED</span>
            <span className={headerBrandClass}>BY</span>
          </div>
          <Image
            src="/fresha-logo.svg"
            alt="fresha"
            width={150}
            height={44}
            className="h-[2.739625rem] w-[9.3335rem]"
            priority
          />
        </div>
      </header>

      <Timeline events={events} currentTime={currentTime} />
      <Navbar activeTab={activeTab} onTabChange={handleTabChange} />
    </main>
  );
}
