export const instagramLinks: Record<string, string> = {
  // GŁÓWNA
  'KACPER ORZECHOWSKI': 'https://www.instagram.com/orzechowski_barber',
  'KACPER TRZASKOWSKI': 'https://www.instagram.com/kacperbarber',
  'ANDREA MAGRI': 'https://www.instagram.com/il.magri',
  'MICHAŁ QUC': '#',
  'PAWEŁ RUP': 'https://www.instagram.com/rup_og',
  'JAKUB BAMBOLOT': 'https://www.instagram.com/bambo.lot',
  'KANRAD FAMULSKI': 'https://www.instagram.com/konrad_famulski',
  'DELMA': '#',
  'MIŁOSZ MIKOŁAJCZAK': 'https://www.instagram.com/milozio',
  'MACIEJ OLEJNIK': 'https://www.instagram.com/barberczaruje',
  'MARCIN OLSZEWSKI': 'https://www.instagram.com/marcin_olszewski',
  'MICKEY': '#',
  'JOSH LAMONACA': 'https://www.instagram.com/joshlamonaca',

  // FRIENDS
  'ANASTAZJA VEBRISKAYA': 'https://www.instagram.com/verbitskayyaa',
  'ALBERT BANASZEK': 'https://www.instagram.com/albert.bansz',
  'JAKUB DYMEL': 'https://www.instagram.com/trashcutzz',
  'KUBA MURAWSKI': 'https://www.instagram.com/kubanczykk',
  'ADRIAN SOŁTYS': 'https://www.instagram.com/sailor_cut',
  'MIKOŁAJ PODEMBSKI': 'https://www.instagram.com/mikolaj_podemski',
  'WIKTOR OSA OSOWSKI': 'https://www.instagram.com/wiktor_osa_ossowski',
  'RASHID SHAKHBAZOV': 'https://www.instagram.com/rash_hair',
  'BARTEK GWIS': 'https://www.instagram.com/bartekgwis',
  'OLIVIER PAŁĘGA': 'https://www.instagram.com/olivier_fade',
  'MARIA PETRENKO': 'https://www.instagram.com/_petrenko_mt_',
  'WIKTOR KRYSZEWSKI': 'https://www.instagram.com/wiktorbarber',
  'ALAN RATAJ': 'https://www.instagram.com/rataj_alan',
  'VADIM FUTOWSKI': 'https://www.instagram.com/futowsky',
  'VLAD POZHOGA': 'https://www.instagram.com/pozhogavlad',
  'KAROL KURZYNA': 'https://www.instagram.com/kakspa_cut',
  'ARTUR GŁAŻEWSKI': 'https://www.instagram.com/barberzynca',
  'WOJCIECH MACKIER': 'https://www.instagram.com/nieuzywamskilli',
  'DAWID NIKLENIEWICZ': 'https://www.instagram.com/_niklu',
  'GRACJAN FOGIEL': 'https://www.instagram.com/gracjanfogiel_',
  'KAMILA RACHUT': 'https://www.instagram.com/kamilarauchut',
  'MAREK MAZIARZ': 'https://www.instagram.com/marek_maziarz',
  'ADAM WIĘCEK': 'https://www.instagram.com/wiecekbarber',
  'PRZEMEK SIWEK': 'https://www.instagram.com/przebarber',
  'MICHAŁ PIKOCZELLI MARASKIEWICZ': 'https://www.instagram.com/pikoczellicutz',

  // FAST FADE
  'KACPER KŁODAWSKI': 'https://www.instagram.com/klodawski_',
  'SZYMON SHEFLER': 'https://www.instagram.com/szef.ler',
  'SANDRA ROGACKA': 'https://www.instagram.com/s_ndra183',
  'KAMIL CIUPEK': 'https://www.instagram.com/kaamciu_97',
  'KAMIL SCIUPEK': 'https://www.instagram.com/kaamciu_97',
  'MICHAŁ MUSZ': '#',
  'KACPER LEWANDOWSKI': 'https://www.instagram.com/_kacperlewandowski',
  'KARLEN YERKANYEN': 'https://www.instagram.com/karlen10',
  'OSKAR JĘDRZEJCZAK': 'https://www.instagram.com/jedrzejczakovy_',
  'KACPER GOŁUCH': 'https://www.instagram.com/ikacperi',
};

export function getInstagramUrl(name: string): string | undefined {
  const url = instagramLinks[name];
  if (!url || url === '#') return undefined;
  return url;
}
