import type { ScheduleEvent } from './types';

export const scheduleStmnt: ScheduleEvent[] = [
  // LOOK & LEARN — 15:15-16:00
  { id: 's1', type: 'artist', section: 'LOOK & LEARN', name: 'KACPER KŁODAWSKI', timeStart: '15:15', timeEnd: '16:00', instagramUrl: 'https://www.instagram.com/klodawski_/' },
  { id: 's2', type: 'artist', section: 'LOOK & LEARN', name: 'AGATA ADAMCZYK', timeStart: '15:15', timeEnd: '16:00', instagramUrl: 'https://www.instagram.com/agatka_ada/' },
  { id: 's3', type: 'artist', section: 'LOOK & LEARN', name: 'PIOTR DUDKA', timeStart: '15:15', timeEnd: '16:00', instagramUrl: 'https://www.instagram.com/kicks.n.beard/' },
  { id: 's4', type: 'artist', section: 'LOOK & LEARN', name: 'KARLEN YERKANYAN', timeStart: '15:15', timeEnd: '16:00', instagramUrl: 'https://www.instagram.com/karlen10/' },
  { id: 's5', type: 'artist', section: 'LOOK & LEARN', name: 'SEBASTIAN RYŃSKI', timeStart: '15:15', timeEnd: '16:00', instagramUrl: 'https://www.instagram.com/sebastian_er/' },
  { id: 's6', type: 'artist', section: 'LOOK & LEARN', name: 'PATRYCJA DĄBEK', timeStart: '15:15', timeEnd: '16:00', instagramUrl: 'https://www.instagram.com/patrycjadabek.fryzjer/' },
  { id: 's7', type: 'artist', section: 'LOOK & LEARN', name: 'DANIEL MIZAK', timeStart: '15:15', timeEnd: '16:00', instagramUrl: 'https://www.instagram.com/daniel_mizakkhair/' },
  { id: 's8', type: 'artist', section: 'LOOK & LEARN', name: 'PAULA ZŁOTA SOBIESZCZAŃSKA', timeStart: '15:15', timeEnd: '16:00', instagramUrl: 'https://www.instagram.com/_paullabarber_/' },

  { id: 's9', type: 'break', name: 'PRZERWA', timeStart: '16:00', timeEnd: '16:10' },

  // SHAVE OFF — 16:10-16:55
  { id: 's10', type: 'artist', section: 'SHAVE OFF', name: 'MARIA SMAHLIUK', timeStart: '16:10', timeEnd: '16:55', instagramUrl: 'https://www.instagram.com/smahliukmia.virginbarber/' },
  { id: 's11', type: 'artist', section: 'SHAVE OFF', name: 'MIŁOSZ MIKOŁAJCZAK', timeStart: '16:10', timeEnd: '16:55', instagramUrl: 'https://www.instagram.com/milozio/' },
  { id: 's12', type: 'artist', section: 'SHAVE OFF', name: 'RAFAŁ SKOCZYLAS', timeStart: '16:10', timeEnd: '16:55', instagramUrl: 'https://www.instagram.com/pan__rafal/' },
  { id: 's13', type: 'artist', section: 'SHAVE OFF', name: 'KARLEN YERKANYAN', timeStart: '16:10', timeEnd: '16:55', instagramUrl: 'https://www.instagram.com/karlen10/' },
  { id: 's14', type: 'artist', section: 'SHAVE OFF', name: 'BOHDAN CHORNYI', timeStart: '16:10', timeEnd: '16:55', instagramUrl: 'https://www.instagram.com/blackwing.barber/' },
  { id: 's15', type: 'artist', section: 'SHAVE OFF', name: 'ANETA DYRA', timeStart: '16:10', timeEnd: '16:55', instagramUrl: 'https://www.instagram.com/anetayasmin_hair/' },
  { id: 's16', type: 'artist', section: 'SHAVE OFF', name: 'OLEH KLEWITSKII', timeStart: '16:10', timeEnd: '16:55', instagramUrl: 'https://www.instagram.com/klewitskii_barber/' },
  { id: 's17', type: 'artist', section: 'SHAVE OFF', name: 'PAULA ZŁOTA SOBIESZCZAŃSKA', timeStart: '16:10', timeEnd: '16:55', instagramUrl: 'https://www.instagram.com/_paullabarber_/' },

  { id: 's18', type: 'break', name: 'PRZERWA', timeStart: '16:55', timeEnd: '17:00' },

  // LOOK & LEARN — 17:00-17:45
  { id: 's19', type: 'artist', section: 'LOOK & LEARN', name: 'MATEUSZ RADZIEJEWSKI', timeStart: '17:00', timeEnd: '17:45', instagramUrl: 'https://www.instagram.com/radziejewski_cuts/' },
  { id: 's20', type: 'artist', section: 'LOOK & LEARN', name: 'DAMIAN ZAKRZEWSKI', timeStart: '17:00', timeEnd: '17:45', instagramUrl: 'https://www.instagram.com/damiansbarbershop/' },
  { id: 's21', type: 'artist', section: 'LOOK & LEARN', name: 'MICHAŁ KWIATKOWSKI', timeStart: '17:00', timeEnd: '17:45', instagramUrl: 'https://www.instagram.com/michal.kwiatko/' },
  { id: 's22', type: 'artist', section: 'LOOK & LEARN', name: 'WIKTOR MACIEJEWSKI', timeStart: '17:00', timeEnd: '17:45', instagramUrl: 'https://www.instagram.com/_wiktorrazor/' },
  { id: 's23', type: 'artist', section: 'LOOK & LEARN', name: 'MARKUS WŁODARSKI', timeStart: '17:00', timeEnd: '17:45', instagramUrl: 'https://www.instagram.com/corner_hair_markus/' },
  { id: 's24', type: 'artist', section: 'LOOK & LEARN', name: 'BARTEK KRET WOJTASZEK', timeStart: '17:00', timeEnd: '17:45', instagramUrl: 'https://www.instagram.com/kret.cuts/' },
  { id: 's25', type: 'artist', section: 'LOOK & LEARN', name: 'MATEUSZ SIPA', timeStart: '17:00', timeEnd: '17:45', instagramUrl: 'https://www.instagram.com/feliks_thebarber/' },
  { id: 's26', type: 'artist', section: 'LOOK & LEARN', name: 'SZYMON FLISIKOWSKI', timeStart: '17:00', timeEnd: '17:45', instagramUrl: 'https://www.instagram.com/mniej_na_glowie/' },

  { id: 's27', type: 'break', name: 'PRZERWA', timeStart: '17:45', timeEnd: '17:50' },

  // SHAVE OFF — 17:50-18:35
  { id: 's28', type: 'artist', section: 'SHAVE OFF', name: 'MIKOŁAJ PODEMSKI', timeStart: '17:50', timeEnd: '18:35', instagramUrl: 'https://www.instagram.com/mikolaj_podemski/' },
  { id: 's29', type: 'artist', section: 'SHAVE OFF', name: 'JOANNA BORKOWSKA', timeStart: '17:50', timeEnd: '18:35', instagramUrl: 'https://www.instagram.com/frisor.gdynia/' },
  { id: 's30', type: 'artist', section: 'SHAVE OFF', name: 'MICHAŁ KWIATKOWSKI', timeStart: '17:50', timeEnd: '18:35', instagramUrl: 'https://www.instagram.com/michal.kwiatko/' },
  { id: 's31', type: 'artist', section: 'SHAVE OFF', name: 'ALBERT BANASZEK', timeStart: '17:50', timeEnd: '18:35', instagramUrl: 'https://www.instagram.com/albert.bansz/' },
  { id: 's32', type: 'artist', section: 'SHAVE OFF', name: 'FILIP KAWKA', timeStart: '17:50', timeEnd: '18:35', instagramUrl: 'https://www.instagram.com/filipbarber9/' },
  { id: 's33', type: 'artist', section: 'SHAVE OFF', name: 'SZYMON KALINOWSKI', timeStart: '17:50', timeEnd: '18:35', instagramUrl: 'https://www.instagram.com/niemamweny__/' },
  { id: 's34', type: 'artist', section: 'SHAVE OFF', name: 'MICHAŁ MUSZ', timeStart: '17:50', timeEnd: '18:35', instagramUrl: 'https://www.instagram.com/michalbuszu/' },
  { id: 's35', type: 'artist', section: 'SHAVE OFF', name: 'DOMINIK WIŚNIEWSKI', timeStart: '17:50', timeEnd: '18:35', instagramUrl: 'https://www.instagram.com/wyblakly/' },

  { id: 's36', type: 'break', name: 'PRZERWA', timeStart: '18:35', timeEnd: '19:00' },

  // LOOK & LEARN — 19:00-19:45
  { id: 's37', type: 'artist', section: 'LOOK & LEARN', name: 'DAMIAN KAPUŚCIŃSKI', timeStart: '19:00', timeEnd: '19:45', instagramUrl: 'https://www.instagram.com/cutkapi/' },
  { id: 's38', type: 'artist', section: 'LOOK & LEARN', name: 'MARCIN WIŚNIEWSKI', timeStart: '19:00', timeEnd: '19:45', instagramUrl: 'https://www.instagram.com/marcinwisniewski_/' },
  { id: 's39', type: 'artist', section: 'LOOK & LEARN', name: 'NIKITA CYBULSKI', timeStart: '19:00', timeEnd: '19:45', instagramUrl: 'https://www.instagram.com/nikitacybulski6/' },
  { id: 's40', type: 'artist', section: 'LOOK & LEARN', name: 'MIKHAIL PTASHKO', timeStart: '19:00', timeEnd: '19:45', instagramUrl: 'https://www.instagram.com/ptashko.barber/' },
  { id: 's41', type: 'artist', section: 'LOOK & LEARN', name: 'BOHDAN SYSA', timeStart: '19:00', timeEnd: '19:45', instagramUrl: 'https://www.instagram.com/danyodboga_/' },
  { id: 's42', type: 'artist', section: 'LOOK & LEARN', name: 'OWAMI QILINGANA', timeStart: '19:00', timeEnd: '19:45', instagramUrl: 'https://www.instagram.com/owami_da_one/' },
  { id: 's43', type: 'artist', section: 'LOOK & LEARN', name: 'RAFAŁ SKIBA', timeStart: '19:00', timeEnd: '19:45', instagramUrl: 'https://www.instagram.com/pan__rafal/' },
  { id: 's44', type: 'artist', section: 'LOOK & LEARN', name: 'ŁUKASZ KRZANOWSKI', timeStart: '19:00', timeEnd: '19:45', instagramUrl: 'https://www.instagram.com/lukas_krzanowski/' },
];
