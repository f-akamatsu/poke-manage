import { ObjectId } from 'mongodb';
import { z } from 'zod';
import { ValueObject } from '../../../../common/domain/value-object';
import { InvalidPokemonException } from '../exceptions/invalid-pokemon.exception';

const PokemonIdSchema = z.string().regex(/^[0-9a-f]{24}$/);

export class PokemonId extends ValueObject<string> {
  public static generate(): PokemonId {
    return new PokemonId(new ObjectId().toString()); // TODO mongodbに依存している
  }

  public static from(value: string): PokemonId {
    return new PokemonId(value);
  }

  protected validate(value: string): void {
    try {
      PokemonIdSchema.parse(value);
    } catch (e) {
      const zodError = e as z.ZodError;
      throw new InvalidPokemonException(
        `PokemonId: ${zodError.issues[0].message}`,
      );
    }
  }
}
