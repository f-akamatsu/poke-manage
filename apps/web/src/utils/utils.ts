export const padNumber = (num: number, digit: number): string =>
  num.toString().padStart(digit, '0');
