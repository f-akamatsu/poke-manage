import { z } from 'zod';
import { ValueObject } from '../../../../../common/domain/value-object';
import { InvalidPokemonException } from '../../exceptions/invalid-pokemon.exception';

const BaseStatsAttackSchema = z.number().min(0);

/**
 * 種族値 こうげき
 */
export class BaseStatsAttack extends ValueObject<number> {
  public static from(baseStatsAttack: number): BaseStatsAttack {
    return new BaseStatsAttack(baseStatsAttack);
  }

  protected validate(value: number): void {
    try {
      BaseStatsAttackSchema.parse(value);
    } catch (e) {
      const zodError = e as z.ZodError;
      throw new InvalidPokemonException(
        `BaseStatsAttack: ${zodError.issues[0].message}`,
      );
    }
  }
}
