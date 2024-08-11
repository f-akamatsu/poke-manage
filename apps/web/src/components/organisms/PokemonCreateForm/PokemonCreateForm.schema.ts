import { pokedexNoSchema, pokemonNameSchema, typeIdSchema } from '@/common';
import { z } from 'zod';

export const pokemonCreateFormSchema = z.object({
  name: pokemonNameSchema,
  pokedexNo: pokedexNoSchema,
  typeId1: typeIdSchema,
  typeId2: typeIdSchema,
});

export type PokemonCreateFormSchemaType = z.infer<typeof pokemonCreateFormSchema>;
