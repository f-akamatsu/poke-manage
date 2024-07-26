import { ValueObject } from '../../../../common/domain/value-object';
import { z } from 'zod';
import { InvalidPokemonException } from '../exceptions/invalid-pokemon.exception';

const PokemonNameSchema = z.string().min(1).max(6);

export class PokemonName extends ValueObject<string> {
  public static from(pokemonName: string): PokemonName {
    return new PokemonName(pokemonName);
  }

  protected validate(value: string): void {
    try {
      PokemonNameSchema.parse(value);
    } catch (e) {
      const zodError = e as z.ZodError;
      throw new InvalidPokemonException(
        `PokemonName: ${zodError.issues[0].message}`,
      );
    }
  }
}
