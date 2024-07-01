import { z } from 'zod';

export const pokemonFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: '名前を入力してください' })
    .max(6, { message: '6文字以内で入力してください' }),
  pokedexNo: z.number().min(1, '1以上の数字を入力してください'),
});

export type PokemonFormSchemaType = z.infer<typeof pokemonFormSchema>;
