import { z } from 'zod';
import { ValueObject } from '../../../../../common/domain/value-object';
import { InvalidPokemonException } from '../../exceptions/invalid-pokemon.exception';

const BaseStatsSpeedSchema = z.number().min(0);

/**
 * 種族値 すばやさ
 */
export class BaseStatsSpeed extends ValueObject<number> {
  public static from(baseStatsSpeed: number): BaseStatsSpeed {
    return new BaseStatsSpeed(baseStatsSpeed);
  }

  protected validate(value: number): void {
    try {
      BaseStatsSpeedSchema.parse(value);
    } catch (e) {
      const zodError = e as z.ZodError;
      throw new InvalidPokemonException(
        `BaseStatsSpeed: ${zodError.issues[0].message}`,
      );
    }
  }
}
