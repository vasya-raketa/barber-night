import Image from 'next/image';
import type { CardState, EventType } from '@/data/types';
import { formatTimeRange } from '@/data/types';
import { cardTitleClass, splitDisplayName } from '@/lib/cardTypography';

interface BreakCardProps {
  name: string;
  type: EventType;
  timeStart: string;
  timeEnd: string;
  state: CardState;
}

function FreshaWordmark() {
  return (
    <Image
      src="/fresha-logo.svg"
      alt="fresha"
      width={150}
      height={44}
      className="mb-2 h-8 w-auto"
      priority
    />
  );
}

function renderName(name: string, type: EventType) {
  const { line1, line2 } = splitDisplayName(name);

  if (type === 'panel') {
    return (
      <div>
        <FreshaWordmark />
        <h2 className={`${cardTitleClass} text-white`}>PANEL</h2>
      </div>
    );
  }

  return (
    <h2 className={`${cardTitleClass} text-white`}>
      <span className="block">{line1}</span>
      {line2 && <span className="block">{line2}</span>}
    </h2>
  );
}

export default function BreakCard({
  name,
  type,
  timeStart,
  timeEnd,
  state,
}: BreakCardProps) {
  const backgroundClass =
    state === 'past' ? 'bg-card-dark-past' : 'bg-black';

  return (
    <article
      className={`mx-auto flex w-full max-w-content flex-col justify-between border-b border-divider p-5 ${backgroundClass}`}
    >
      <div className="mb-6">{renderName(name, type)}</div>

      <time className="font-sans text-[1.875rem] font-bold uppercase leading-[0.87] tracking-[-0.05625rem] text-white">
        {formatTimeRange(timeStart, timeEnd)}
      </time>
    </article>
  );
}
