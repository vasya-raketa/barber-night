'use client';

import type { Tab } from '@/data/types';

interface NavbarProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

interface NavItem {
  id: string;
  label: string;
  tab?: Tab;
  disabled?: boolean;
}

const navItems: NavItem[] = [
  { id: 'glowna', label: 'GŁÓWNA', tab: 'glowna' },
  { id: 'friends', label: 'FRIENDS', tab: 'friends' },
  { id: 'fastfade', label: 'FAST FADE', tab: 'fastfade' },
  { id: 'stmnt', label: 'STMNT', tab: 'stmnt' },
  { id: 'mapa', label: 'MAPA', disabled: true },
];

const tabLinkClass =
  'min-h-[44px] cursor-pointer font-condensed text-[1.875rem] uppercase leading-[0.87] tracking-[-0.05625rem] text-white no-underline transition-opacity hover:opacity-80';

export default function Navbar({ activeTab, onTabChange }: NavbarProps) {
  const handleTabClick = (tab: Tab) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onTabChange(tab);
  };

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 bg-black px-5 pb-[calc(20px+env(safe-area-inset-bottom))] pt-5"
      aria-label="Stage navigation"
    >
      <div
        className="mx-auto flex w-full max-w-content items-center justify-between"
        role="tablist"
      >
        {navItems.map((item) => {
          const isActive = item.tab === activeTab;
          const isDisabled = item.disabled;

          if (isDisabled) {
            return (
              <span
                key={item.id}
                className="cursor-not-allowed font-condensed text-[1.875rem] font-bold uppercase leading-[0.87] tracking-[-0.05625rem] text-white/40"
                aria-disabled="true"
              >
                {item.label}
              </span>
            );
          }

          return (
            <a
              key={item.id}
              href={`#${item.tab}`}
              role="tab"
              aria-selected={isActive}
              onClick={handleTabClick(item.tab!)}
              className={`${tabLinkClass} ${
                isActive ? 'font-bold opacity-100' : 'font-bold opacity-50'
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
