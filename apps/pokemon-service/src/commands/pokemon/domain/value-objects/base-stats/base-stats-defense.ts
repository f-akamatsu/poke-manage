import { z } from 'zod';
import { ValueObject } from '../../../../../common/domain/value-object';
import { InvalidPokemonException } from '../../exceptions/invalid-pokemon.exception';

const BaseStatsDefenseSchema = z.number().min(0);

/**
 * 種族値 ぼうぎょ
 */
export class BaseStatsDefense extends ValueObject<number> {
  public static from(baseStatsDefense: number): BaseStatsDefense {
    return new BaseStatsDefense(baseStatsDefense);
  }

  protected validate(value: number): void {
    try {
      BaseStatsDefenseSchema.parse(value);
    } catch (e) {
      const zodError = e as z.ZodError;
      throw new InvalidPokemonException(
        `BaseStatsDefense: ${zodError.issues[0].message}`,
      );
    }
  }
}
