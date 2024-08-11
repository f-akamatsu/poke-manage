import { Type } from '@packages/common-enum';

export const getTypeColorCode = (typeId: string): string => {
  const type = Type.fromId(typeId);

  if (type === Type.NORMAL) return '#9199A1';
  if (type === Type.FIRE) return '#FB9E53';
  if (type === Type.WATER) return '#4D91D7';
  if (type === Type.ELECTRIC) return '#F5D337';
  if (type === Type.GRASS) return '#66BB5E';
  if (type === Type.ICE) return '#70CDBF';
  if (type === Type.FIGHTING) return '#CE406C';
  if (type === Type.POISON) return '#AA6AC8';
  if (type === Type.GROUND) return '#D77742';
  if (type === Type.FLYING) return '#8BA8DC';
  if (type === Type.PSYCHIC) return '#FA707C';
  if (type === Type.BUG) return '#8FC02B';
  if (type === Type.ROCK) return '#C8B68D';
  if (type === Type.GHOST) return '#546AAE';
  if (type === Type.DRAGON) return '#0A6CBF';
  if (type === Type.DARK) return '#595365';
  if (type === Type.STEEL) return '#5B8F9E';
  if (type === Type.FAIRY) return '#E990E3';

  return '#FFFFFF';
};
