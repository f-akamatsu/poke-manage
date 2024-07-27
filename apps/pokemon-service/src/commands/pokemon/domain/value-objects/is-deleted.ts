import { z } from 'zod';
import { ValueObject } from '../../../../common/domain/value-object';
import { InvalidPokemonException } from '../exceptions/invalid-pokemon.exception';

const IsDeletedSchema = z.boolean();

export class IsDeleted extends ValueObject<boolean> {
  public static from(isDeleted: boolean): IsDeleted {
    return new IsDeleted(isDeleted);
  }

  protected validate(value: boolean): void {
    try {
      IsDeletedSchema.parse(value);
    } catch (e) {
      const zodError = e as z.ZodError;
      throw new InvalidPokemonException(
        `IsDeleted: ${zodError.issues[0].message}`,
      );
    }
  }
}
