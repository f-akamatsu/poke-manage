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
const typeBaseSchema = z.object(
  { label: z.string(), value: z.string() },
  { invalid_type_error: '入力してください' }
);

/** スキーマ タイプ1 */
export const type1Schema = typeBaseSchema;

/** スキーマ タイプ2 */
export const type2Schema = typeBaseSchema.nullable().optional();

/** スキーマ 種族値 */
export const baseStatsSchema = z.number().int().min(1);
