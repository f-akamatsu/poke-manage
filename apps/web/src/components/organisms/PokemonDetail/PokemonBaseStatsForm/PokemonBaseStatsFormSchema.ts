import { z } from 'zod';
import { baseStatsSchema } from '../../../../common';

export const pokemonBaseStatsFormSchema = z.object({
  hitPoints: baseStatsSchema,
  attack: baseStatsSchema,
  defense: baseStatsSchema,
  spAttack: baseStatsSchema,
  spDefense: baseStatsSchema,
  speed: baseStatsSchema,
});

export type PokemonBaseStatsFormSchemaType = z.infer<typeof pokemonBaseStatsFormSchema>;
