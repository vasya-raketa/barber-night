import type { CardState } from '@/data/types';
import { formatTimeRange, getEventProgress } from '@/data/types';
import { cardTitleClass, splitDisplayName } from '@/lib/cardTypography';

interface ArtistCardProps {
  name: string;
  subtitle?: string;
  timeStart: string;
  timeEnd: string;
  instagramUrl?: string;
  state: CardState;
  currentTime: Date;
}

function getFillPercent(
  state: CardState,
  timeStart: string,
  timeEnd: string,
  currentTime: Date
): number {
  if (state === 'future') return 0;
  if (state === 'past') return 100;
  return getEventProgress(timeStart, timeEnd, currentTime);
}

export default function ArtistCard({
  name,
  subtitle,
  timeStart,
  timeEnd,
  instagramUrl,
  state,
  currentTime,
}: ArtistCardProps) {
  const fillPercent = getFillPercent(state, timeStart, timeEnd, currentTime);
  const { line1, line2 } = splitDisplayName(name);

  const activeClass =
    state === 'active'
      ? 'border-l-[3px] border-l-black animate-active-pulse'
      : '';

  const timeColorClass = state === 'past' ? 'text-[#666]' : 'text-black';

  return (
    <article
      className={`relative mx-auto flex w-full max-w-content flex-col justify-between border-b border-divider p-5 ${activeClass}`}
      style={{
        background: `linear-gradient(to right, #D9D9D9 ${fillPercent}%, rgba(255, 255, 255, 1) ${fillPercent}%)`,
      }}
    >
      <div className="mb-6">
        <div className="flex items-start justify-between gap-4">
          <h2 className={`${cardTitleClass} text-black`}>
            <span className="block">{line1}</span>
            {line2 && <span className="block">{line2}</span>}
          </h2>
          {subtitle && (
            <span className="shrink-0 pt-1 font-sans text-sm font-bold uppercase tracking-wide text-black">
              {subtitle}
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <time
          className={`font-sans text-[1.875rem] font-bold uppercase leading-[0.87] tracking-[-0.05625rem] ${timeColorClass}`}
        >
          {formatTimeRange(timeStart, timeEnd)}
        </time>

        {instagramUrl && instagramUrl !== '#' && (
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[3.1875rem] shrink-0 items-center justify-center gap-[0.15075rem] bg-black px-[1.6666875rem] py-[0.9166875rem] font-sans text-[1.25rem] font-medium uppercase leading-[1.50769rem] tracking-[-0.0125rem] text-white no-underline"
          >
            Instagram
          </a>
        )}
      </div>
    </article>
  );
}
