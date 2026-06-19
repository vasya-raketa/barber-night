import type { Tab } from './types';
import { scheduleGlowna } from './schedule-glowna';
import { scheduleFriends } from './schedule-friends';
import { scheduleFastFade } from './schedule-fastfade';
import { scheduleStmnt } from './schedule-stmnt';

export { scheduleGlowna, scheduleFriends, scheduleFastFade, scheduleStmnt };
export type { EventType, Tab, ScheduleEvent, CardState } from './types';
export {
  parseEventTime,
  getCardState,
  getEventProgress,
  formatTimeRange,
  isDarkEvent,
} from './types';

export const schedules: Record<Tab, typeof scheduleGlowna> = {
  glowna: scheduleGlowna,
  friends: scheduleFriends,
  fastfade: scheduleFastFade,
  stmnt: scheduleStmnt,
};
