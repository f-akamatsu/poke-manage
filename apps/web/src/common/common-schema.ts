import { z } from 'zod';

/** スキーマ ポケモン名 */
export const pokemonNameSchema = z
  .string()
  .min(1, { message: '名前を入力してください' })
  .max(6, { message: '6文字以内で入力してください' });

/** スキーマ ポケモン図鑑No */
export const pokedexNoSchema = z
  .number({ message: '数字を入力してください' })
  .min(1, '1以上の数字を入力してください');
