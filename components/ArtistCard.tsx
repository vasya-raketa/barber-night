import type { CardState } from '@/data/types';
import { formatTimeRange, getEventProgress } from '@/data/types';
import { cardTitleClass, splitDisplayName } from '@/lib/cardTypography';

interface ArtistCardProps {
  id?: string;
  name: string;
  subtitle?: string;
  section?: string;
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
  id,
  name,
  subtitle,
  section,
  timeStart,
  timeEnd,
  instagramUrl,
  state,
  currentTime,
}: ArtistCardProps) {
  const fillPercent = getFillPercent(state, timeStart, timeEnd, currentTime);
  const { line1, line2 } = splitDisplayName(name);
  const badge = subtitle ?? section;

  const activeClass =
    state === 'active'
      ? 'border-l-[3px] border-l-black animate-active-pulse'
      : '';

  const timeColorClass = state === 'past' ? 'text-[#666]' : 'text-black';

  return (
    <article
      id={id}
      className={`relative mx-auto flex w-full max-w-content scroll-mt-[170px] flex-col justify-between overflow-hidden border-b border-b-black bg-white p-5 ${activeClass}`}
    >
      <div
        className="absolute inset-y-0 left-0 bg-card-past transition-[width] duration-1000 ease-linear"
        style={{ width: `${fillPercent}%` }}
        aria-hidden="true"
      />

      <div className="relative z-10 mb-6">
        <h2 className={`${cardTitleClass} text-black`}>
          <span className="block">{line1}</span>
          {line2 && <span className="block">{line2}</span>}
        </h2>
      </div>

      <div className="relative z-10 flex items-center justify-between gap-4 self-stretch">
        <time
          className={`font-condensed text-[1.875rem] font-bold uppercase leading-[0.87] tracking-[-0.05625rem] ${timeColorClass}`}
        >
          {formatTimeRange(timeStart, timeEnd)}
        </time>

        {badge && (
          <span
            className={`font-condensed text-[1.875rem] font-bold uppercase leading-[0.87] tracking-[-0.05625rem] ${timeColorClass}`}
          >
            {badge}
          </span>
        )}

        {instagramUrl && instagramUrl !== '#' && (
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[3.1875rem] shrink-0 items-center justify-center gap-[0.15075rem] bg-black px-[1.6666875rem] py-[0.9166875rem] font-condensed text-[1.25rem] font-medium uppercase leading-[1.50769rem] tracking-[-0.0125rem] text-white no-underline"
          >
            Instagram
          </a>
        )}
      </div>
    </article>
  );
}
