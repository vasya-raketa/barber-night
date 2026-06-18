import type { ScheduleEvent } from './types';
import { getInstagramUrl } from './instagram-links';

export const scheduleFriends: ScheduleEvent[] = [
  { id: 'f1', type: 'artist', name: 'ANASTAZJA VEBRISKAYA', timeStart: '15:15', timeEnd: '16:15', instagramUrl: getInstagramUrl('ANASTAZJA VEBRISKAYA') },
  { id: 'f2', type: 'artist', name: 'ALBERT BANASZEK', timeStart: '15:15', timeEnd: '16:15', instagramUrl: getInstagramUrl('ALBERT BANASZEK') },
  { id: 'f3', type: 'artist', name: 'JAKUB DYMEL', timeStart: '15:15', timeEnd: '16:15', instagramUrl: getInstagramUrl('JAKUB DYMEL') },
  { id: 'f4', type: 'artist', name: 'KUBA MURAWSKI', timeStart: '15:15', timeEnd: '16:15', instagramUrl: getInstagramUrl('KUBA MURAWSKI') },
  { id: 'f5', type: 'artist', name: 'ALBERT BANASZEK', timeStart: '16:20', timeEnd: '17:20', instagramUrl: getInstagramUrl('ALBERT BANASZEK') },
  { id: 'f6', type: 'artist', name: 'JAKUB DYMEL', timeStart: '16:20', timeEnd: '17:20', instagramUrl: getInstagramUrl('JAKUB DYMEL') },
  { id: 'f7', type: 'artist', name: 'KUBA MURAWSKI', timeStart: '16:20', timeEnd: '17:20', instagramUrl: getInstagramUrl('KUBA MURAWSKI') },
  { id: 'f8', type: 'artist', name: 'PRZEMEK SIWEK', timeStart: '17:25', timeEnd: '18:25', instagramUrl: getInstagramUrl('PRZEMEK SIWEK') },
  { id: 'f9', type: 'artist', name: 'MICHAŁ PIKOCZELLI MARASKIEWICZ', timeStart: '17:25', timeEnd: '18:25', instagramUrl: getInstagramUrl('MICHAŁ PIKOCZELLI MARASKIEWICZ') },
  // TODO: Add remaining Friends stage artists from source schedule
];
