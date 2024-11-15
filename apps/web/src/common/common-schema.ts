import { z } from 'zod';

/** スキーマ ポケモン名 */
export const pokemonNameSchema = z
  .string()
  .min(1, { message: '入力してください' })
  .max(6, { message: '6文字以内で入力してください' });

/** スキーマ ポケモン図鑑No */
export const pokedexNoSchema = z
  .number({ message: '入力してください' })
  .int()
  .min(1, '1以上を入力してください');

/** スキーマ タイプ(共通) */
const typeBaseSchema = z.string().array();

/** スキーマ タイプ1 */
export const type1Schema = typeBaseSchema;

/** スキーマ タイプ2 */
export const type2Schema = typeBaseSchema;

/** スキーマ 種族値 */
export const baseStatsSchema = z
  .number({ message: '入力してください' })
  .int()
  .min(1, '1以上を入力してください');
