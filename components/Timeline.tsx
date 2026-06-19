import type { ScheduleEvent } from '@/data/types';
import { getCardState, isDarkEvent } from '@/data/types';
import ArtistCard from './ArtistCard';
import BreakCard from './BreakCard';

interface TimelineProps {
  events: ScheduleEvent[];
  currentTime: Date;
}

export default function Timeline({ events, currentTime }: TimelineProps) {
  return (
    <section aria-label="Event schedule">
      {events.map((event) => {
        const state = getCardState(event, currentTime);

        if (isDarkEvent(event.type)) {
          return (
            <BreakCard
              key={event.id}
              id={event.id}
              name={event.name}
              type={event.type}
              timeStart={event.timeStart}
              timeEnd={event.timeEnd}
              state={state}
            />
          );
        }

        return (
          <ArtistCard
            key={event.id}
            id={event.id}
            name={event.name}
            subtitle={event.subtitle}
            section={event.section}
            timeStart={event.timeStart}
            timeEnd={event.timeEnd}
            instagramUrl={event.instagramUrl}
            state={state}
            currentTime={currentTime}
          />
        );
      })}
    </section>
  );
}
