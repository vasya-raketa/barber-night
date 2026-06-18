export const cardTitleClass = 'card-title font-sans font-bold uppercase';

export function splitDisplayName(name: string): { line1: string; line2: string } {
  if (name.includes('\n')) {
    const [first, ...rest] = name.split('\n');
    return { line1: first, line2: rest.join(' ') };
  }

  const spaceIndex = name.indexOf(' ');
  if (spaceIndex === -1) {
    return { line1: name, line2: '' };
  }

  return {
    line1: name.slice(0, spaceIndex),
    line2: name.slice(spaceIndex + 1),
  };
}
