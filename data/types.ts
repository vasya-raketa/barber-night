export type EventType =
  | 'artist'
  | 'break'
  | 'panel'
  | 'special'
  | 'competition'
  | 'closing';

export type Tab = 'glowna' | 'friends' | 'fastfade';

export interface ScheduleEvent {
  id: string;
  type: EventType;
  name: string;
  subtitle?: string;
  timeStart: string;
  timeEnd: string;
  instagramUrl?: string;
  bgColor?: string;
}

export type CardState = 'past' | 'active' | 'future';

export function parseEventTime(timeStr: string): Date {
  const [hours, minutes] = timeStr.split(':').map(Number);
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return date;
}

export function getCardState(event: ScheduleEvent, now: Date): CardState {
  const start = parseEventTime(event.timeStart);
  const end = parseEventTime(event.timeEnd);
  if (now >= end) return 'past';
  if (now >= start) return 'active';
  return 'future';
}

export function getEventProgress(
  timeStart: string,
  timeEnd: string,
  now: Date
): number {
  const start = parseEventTime(timeStart).getTime();
  const end = parseEventTime(timeEnd).getTime();
  if (now.getTime() <= start) return 0;
  if (now.getTime() >= end) return 100;
  return ((now.getTime() - start) / (end - start)) * 100;
}

export function formatTimeRange(timeStart: string, timeEnd: string): string {
  return `${timeStart} – ${timeEnd}`;
}

export function isDarkEvent(type: EventType): boolean {
  return ['break', 'panel', 'special', 'competition', 'closing'].includes(type);
}
