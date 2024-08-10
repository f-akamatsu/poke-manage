import { Monster } from '@/icons/monster';

export interface NoImageProps {
  width?: string;
  height?: string;
}

export function NoImage({ width = '50px', height = '50px' }: NoImageProps) {
  return <Monster width={width} height={height} style={{ opacity: 0.8 }} />;
}
