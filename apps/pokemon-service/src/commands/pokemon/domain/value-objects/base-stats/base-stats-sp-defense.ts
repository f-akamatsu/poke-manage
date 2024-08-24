import { z } from 'zod';
import { ValueObject } from '../../../../../common/domain/value-object';
import { InvalidPokemonException } from '../../exceptions/invalid-pokemon.exception';

const BaseStatsSpDefenseSchema = z.number().int().min(0);

/**
 * 種族値 とくぼう
 */
export class BaseStatsSpDefense extends ValueObject<number> {
  public static from(baseStatsSpDefense: number): BaseStatsSpDefense {
    return new BaseStatsSpDefense(baseStatsSpDefense);
  }

  protected validate(value: number): void {
    try {
      BaseStatsSpDefenseSchema.parse(value);
    } catch (e) {
      const zodError = e as z.ZodError;
      throw new InvalidPokemonException(
        `BaseStatsSpDefense: ${zodError.issues[0].message}`,
      );
    }
  }
}
