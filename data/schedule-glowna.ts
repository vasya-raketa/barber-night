import type { ScheduleEvent } from './types';
import { getInstagramUrl } from './instagram-links';

export const scheduleGlowna: ScheduleEvent[] = [
  { id: 'g1', type: 'artist', name: 'KACPER ORZECHOWSKI', subtitle: 'FADE', timeStart: '15:20', timeEnd: '16:20', instagramUrl: getInstagramUrl('KACPER ORZECHOWSKI') },
  { id: 'g2', type: 'artist', name: 'KACPER TRZASKOWSKI', subtitle: 'FADE', timeStart: '15:20', timeEnd: '16:20', instagramUrl: getInstagramUrl('KACPER TRZASKOWSKI') },
  { id: 'g3', type: 'artist', name: 'ANDREA MAGRI', subtitle: 'FADE', timeStart: '15:20', timeEnd: '16:20', instagramUrl: getInstagramUrl('ANDREA MAGRI') },
  { id: 'g5', type: 'break', name: 'PRZERWA', timeStart: '16:20', timeEnd: '16:30' },
  { id: 'g6', type: 'panel', name: 'FRESHA PANEL', timeStart: '16:30', timeEnd: '16:50' },
  { id: 'g7', type: 'break', name: 'PRZERWA', timeStart: '16:50', timeEnd: '17:00' },
  { id: 'g8', type: 'artist', name: 'PAWEŁ RUP', subtitle: 'ALTERNATIV', timeStart: '17:00', timeEnd: '18:00', instagramUrl: getInstagramUrl('PAWEŁ RUP') },
  { id: 'g9', type: 'artist', name: 'JAKUB BAMBOLOT', subtitle: 'ALTERNATIV', timeStart: '17:00', timeEnd: '18:00', instagramUrl: getInstagramUrl('JAKUB BAMBOLOT') },
  { id: 'g10', type: 'artist', name: 'KANRAD FAMULSKI', subtitle: 'ALTERNATIV', timeStart: '17:00', timeEnd: '18:00', instagramUrl: getInstagramUrl('KANRAD FAMULSKI') },
  { id: 'g12', type: 'break', name: 'PRZERWA', timeStart: '18:00', timeEnd: '18:10' },
  { id: 'g13', type: 'panel', name: 'FRESHA PANEL', timeStart: '18:10', timeEnd: '18:30' },
  { id: 'g14', type: 'special', name: 'FAST FADE\nSCENA FRIENDS', timeStart: '18:30', timeEnd: '18:50' },
  { id: 'g15', type: 'artist', name: 'MIŁOSZ MIKOŁAJCZAK', subtitle: 'BRODA', timeStart: '17:00', timeEnd: '18:00', instagramUrl: getInstagramUrl('MIŁOSZ MIKOŁAJCZAK') },
  { id: 'g16', type: 'artist', name: 'MACIEJ OLEJNIK', subtitle: 'BRODA', timeStart: '17:00', timeEnd: '18:00', instagramUrl: getInstagramUrl('MACIEJ OLEJNIK') },
  { id: 'g17', type: 'artist', name: 'MARCIN OLSZEWSKI', subtitle: 'BRODA', timeStart: '17:00', timeEnd: '18:00', instagramUrl: getInstagramUrl('MARCIN OLSZEWSKI') },
  { id: 'g19', type: 'competition', name: 'ROZSTRZYGNIĘCIE\nKONKURSÓW FADE I FOTO', timeStart: '20:00', timeEnd: '20:30' },
  { id: 'g20', type: 'artist', name: 'JOSH LAMONACA', timeStart: '20:30', timeEnd: '22:30', instagramUrl: getInstagramUrl('JOSH LAMONACA') },
];
