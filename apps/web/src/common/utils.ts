export const padNumber = (num: number, digit: number): string => {
  return num.toString().padStart(digit, '0');
};
