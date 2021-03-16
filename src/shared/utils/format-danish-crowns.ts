type FormatDanishCrowns = (val: number) => string;
export const formatDanishCrowns: FormatDanishCrowns = (val) => {
  if (val % 1 === 0) {
    return `${val},- DKK`;
  }

  return `${val} DKK`.replace('.', ',');
};
