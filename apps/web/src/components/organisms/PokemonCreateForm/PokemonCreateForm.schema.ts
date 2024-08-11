import { pokedexNoSchema, pokemonNameSchema } from '@/common';
import { z } from 'zod';

export const pokemonCreateFormSchema = z.object({
  name: pokemonNameSchema,
  pokedexNo: pokedexNoSchema,
});
