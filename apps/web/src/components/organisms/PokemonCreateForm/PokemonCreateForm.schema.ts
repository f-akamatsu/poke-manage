import { pokedexNoSchema, pokemonNameSchema, type1Schema, type2Schema } from '@/common';
import { z } from 'zod';

export const pokemonCreateFormSchema = z.object({
  name: pokemonNameSchema,
  pokedexNo: pokedexNoSchema,
  type1: type1Schema,
  type2: type2Schema,
});

export type PokemonCreateFormSchemaType = z.infer<typeof pokemonCreateFormSchema>;
