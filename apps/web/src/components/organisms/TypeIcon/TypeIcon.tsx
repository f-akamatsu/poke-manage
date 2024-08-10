import {
  Bug,
  Dark,
  Dragon,
  Electric,
  Fairy,
  Fighting,
  Fire,
  Flying,
  Ghost,
  Grass,
  Ground,
  Ice,
  Normal,
  Poison,
  Psychic,
  Rock,
  Steel,
  Water,
} from '@/icons/type';
import { Type } from '@packages/common-enum';

const SIZE = 20;

export interface TypeIconProps {
  typeId: string;
}

export function TypeIcon({ typeId }: TypeIconProps) {
  const type = Type.fromId(typeId);

  if (type === Type.NORMAL) return <Normal width={`${SIZE}px`} height={`${SIZE}px`} />;
  if (type === Type.FIRE) return <Fire width={`${SIZE}px`} height={`${SIZE}px`} />;
  if (type === Type.WATER) return <Water width={`${SIZE}px`} height={`${SIZE}px`} />;
  if (type === Type.ELECTRIC) return <Electric width={`${SIZE}px`} height={`${SIZE}px`} />;
  if (type === Type.GRASS) return <Grass width={`${SIZE}px`} height={`${SIZE}px`} />;
  if (type === Type.ICE) return <Ice width={`${SIZE}px`} height={`${SIZE}px`} />;
  if (type === Type.FIGHTING) return <Fighting width={`${SIZE}px`} height={`${SIZE}px`} />;
  if (type === Type.POISON) return <Poison width={`${SIZE}px`} height={`${SIZE}px`} />;
  if (type === Type.GROUND) return <Ground width={`${SIZE}px`} height={`${SIZE}px`} />;
  if (type === Type.FLYING) return <Flying width={`${SIZE}px`} height={`${SIZE}px`} />;
  if (type === Type.PSYCHIC) return <Psychic width={`${SIZE}px`} height={`${SIZE}px`} />;
  if (type === Type.BUG) return <Bug width={`${SIZE}px`} height={`${SIZE}px`} />;
  if (type === Type.ROCK) return <Rock width={`${SIZE}px`} height={`${SIZE}px`} />;
  if (type === Type.GHOST) return <Ghost width={`${SIZE}px`} height={`${SIZE}px`} />;
  if (type === Type.DRAGON) return <Dragon width={`${SIZE}px`} height={`${SIZE}px`} />;
  if (type === Type.DARK) return <Dark width={`${SIZE}px`} height={`${SIZE}px`} />;
  if (type === Type.STEEL) return <Steel width={`${SIZE}px`} height={`${SIZE}px`} />;
  if (type === Type.FAIRY) return <Fairy width={`${SIZE}px`} height={`${SIZE}px`} />;

  return null;
}
