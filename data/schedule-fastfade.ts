import type { ScheduleEvent } from './types';
import { getInstagramUrl } from './instagram-links';

export const scheduleFastFade: ScheduleEvent[] = [
  { id: 'ff1', type: 'artist', name: 'KACPER KŁODAWSKI', timeStart: '15:15', timeEnd: '16:15', instagramUrl: getInstagramUrl('KACPER KŁODAWSKI') },
  { id: 'ff2', type: 'artist', name: 'SZYMON SHEFLER', timeStart: '16:20', timeEnd: '17:20', instagramUrl: getInstagramUrl('SZYMON SHEFLER') },
  { id: 'ff3', type: 'artist', name: 'KAMIL SCIUPEK', timeStart: '16:20', timeEnd: '17:20', instagramUrl: getInstagramUrl('KAMIL SCIUPEK') },
  { id: 'ff4', type: 'artist', name: 'MICHAŁ MUSZ', timeStart: '16:20', timeEnd: '17:20', instagramUrl: getInstagramUrl('MICHAŁ MUSZ') },
  { id: 'ff5', type: 'artist', name: 'KACPER LEWANDOWSKI', timeStart: '17:25', timeEnd: '18:25', instagramUrl: getInstagramUrl('KACPER LEWANDOWSKI') },
  // TODO: Add remaining Fast Fade artists from source schedule (below the fold)
];
