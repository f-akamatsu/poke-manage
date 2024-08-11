import { pokedexNoSchema, pokemonNameSchema } from '@/common/common-schema';
import { z } from 'zod';

export const pokemonFormSchema = z.object({
  name: pokemonNameSchema,
  pokedexNo: pokedexNoSchema,
});

export type PokemonFormSchemaType = z.infer<typeof pokemonFormSchema>;
