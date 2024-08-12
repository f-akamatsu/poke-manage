import { pokedexNoSchema, pokemonNameSchema, type1Schema, type2Schema } from '@/common';
import { z } from 'zod';

export const pokemonCreateFormSchema = z
  .object({
    name: pokemonNameSchema,
    pokedexNo: pokedexNoSchema,
    type1: type1Schema,
    type2: type2Schema,
  })
  .refine(
    (data) => {
      if (data.type2 === undefined || data.type2 === null) return true;
      if (data.type2.value !== data.type1.value) return true;
      return false;
    },
    {
      path: ['type2'],
      message: 'タイプ1と同じタイプです',
    }
  );

export type PokemonCreateFormSchemaType = z.infer<typeof pokemonCreateFormSchema>;
