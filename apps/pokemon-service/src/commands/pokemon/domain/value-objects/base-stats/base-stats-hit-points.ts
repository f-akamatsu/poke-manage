import { z } from 'zod';
import { ValueObject } from '../../../../../common/domain/value-object';
import { InvalidPokemonException } from '../../exceptions/invalid-pokemon.exception';

const BaseStatsHitPointsSchema = z.number().min(0);

/**
 * 種族値 HP
 */
export class BaseStatsHitPoints extends ValueObject<number> {
  public static from(baseStatsHitPoints: number): BaseStatsHitPoints {
    return new BaseStatsHitPoints(baseStatsHitPoints);
  }

  protected validate(value: number): void {
    try {
      BaseStatsHitPointsSchema.parse(value);
    } catch (e) {
      const zodError = e as z.ZodError;
      throw new InvalidPokemonException(
        `BaseStatsHitPoints: ${zodError.issues[0].message}`,
      );
    }
  }
}
