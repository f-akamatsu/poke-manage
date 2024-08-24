import { z } from 'zod';
import { ValueObject } from '../../../../../common/domain/value-object';
import { InvalidPokemonException } from '../../exceptions/invalid-pokemon.exception';

const BaseStatsSpAttackSchema = z.number().int().min(0);

/**
 * 種族値 とくこう
 */
export class BaseStatsSpAttack extends ValueObject<number> {
  public static from(baseStatsSpAttack: number): BaseStatsSpAttack {
    return new BaseStatsSpAttack(baseStatsSpAttack);
  }

  protected validate(value: number): void {
    try {
      BaseStatsSpAttackSchema.parse(value);
    } catch (e) {
      const zodError = e as z.ZodError;
      throw new InvalidPokemonException(
        `BaseStatsSpAttack: ${zodError.issues[0].message}`,
      );
    }
  }
}
