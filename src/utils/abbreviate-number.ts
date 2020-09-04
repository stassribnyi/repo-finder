import numeral from 'numeral';

export const abbreviateNumber = (value: number): string =>
  numeral(value).format('0a');
