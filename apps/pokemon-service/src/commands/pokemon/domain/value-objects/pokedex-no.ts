import { z } from 'zod';
import { ValueObject } from '../../../../common/domain/value-object';
import { InvalidPokemonException } from '../exceptions/invalid-pokemon.exception';

const PokedexNoSchema = z.number().int().min(1);

export class PokedexNo extends ValueObject<number> {
  public static from(pokedexNo: number): PokedexNo {
    return new PokedexNo(pokedexNo);
  }

  protected validate(value: number): void {
    try {
      PokedexNoSchema.parse(value);
    } catch (e) {
      const zodError = e as z.ZodError;
      throw new InvalidPokemonException(
        `PokedexNo: ${zodError.issues[0].message}`,
      );
    }
  }
}
