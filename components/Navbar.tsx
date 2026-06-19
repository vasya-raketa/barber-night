'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Tab } from '@/data/types';

interface NavbarProps {
  activeTab?: Tab;
  onTabChange?: (tab: Tab) => void;
}

interface NavItem {
  id: string;
  label: string;
  tab?: Tab;
  href?: string;
}

const navItems: NavItem[] = [
  { id: 'glowna', label: 'GŁÓWNA', tab: 'glowna' },
  { id: 'friends', label: 'FRIENDS', tab: 'friends' },
  { id: 'fastfade', label: 'FAST FADE', tab: 'fastfade' },
  { id: 'stmnt', label: 'STMNT', tab: 'stmnt' },
  { id: 'mapa', label: 'MAPA', href: '/mapa' },
];

const tabLinkClass =
  'min-h-[44px] cursor-pointer font-condensed text-[1.875rem] uppercase leading-[0.87] tracking-[-0.05625rem] text-white no-underline transition-opacity hover:opacity-80';

function stateClass(isActive: boolean) {
  return `${tabLinkClass} font-bold ${isActive ? 'opacity-100' : 'opacity-50'}`;
}

export default function Navbar({ activeTab, onTabChange }: NavbarProps) {
  const pathname = usePathname();
  const onHome = pathname === '/';

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
          if (item.href) {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.id}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={stateClass(isActive)}
              >
                {item.label}
              </Link>
            );
          }

          const tab = item.tab!;
          const isActive = onHome && activeTab === tab;

          // On the home page with in-page tab switching, intercept the click.
          if (onHome && onTabChange) {
            return (
              <a
                key={item.id}
                href={`/#${tab}`}
                role="tab"
                aria-selected={isActive}
                onClick={(event) => {
                  event.preventDefault();
                  onTabChange(tab);
                }}
                className={stateClass(isActive)}
              >
                {item.label}
              </a>
            );
          }

          // On other routes (e.g. /mapa), link back to home with the tab hash.
          return (
            <Link
              key={item.id}
              href={`/#${tab}`}
              role="tab"
              aria-selected={isActive}
              className={stateClass(isActive)}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
