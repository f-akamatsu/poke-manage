import { InvalidPokemonException } from '../../../../domain/exceptions/invalid-pokemon.exception';
import { BaseStats } from '../../../../domain/value-objects/base-stats/base-stats';
import { BaseStatsAttack } from '../../../../domain/value-objects/base-stats/base-stats-attack';
import { BaseStatsDefense } from '../../../../domain/value-objects/base-stats/base-stats-defense';
import { BaseStatsHitPoints } from '../../../../domain/value-objects/base-stats/base-stats-hit-points';
import { BaseStatsSpAttack } from '../../../../domain/value-objects/base-stats/base-stats-sp-attack';
import { BaseStatsSpDefense } from '../../../../domain/value-objects/base-stats/base-stats-sp-defense';
import { BaseStatsSpeed } from '../../../../domain/value-objects/base-stats/base-stats-speed';

describe('BaseStats', () => {
  describe('バリデーション', () => {
    it('すべての種族値が正しいとき、値が正しいこと', () => {
      const baseStats = BaseStats.from(108, 130, 95, 80, 85, 102);
      expect(baseStats.hitPoints).toEqual(BaseStatsHitPoints.from(108));
      expect(baseStats.attack).toEqual(BaseStatsAttack.from(130));
      expect(baseStats.defense).toEqual(BaseStatsDefense.from(95));
      expect(baseStats.spAttack).toEqual(BaseStatsSpAttack.from(80));
      expect(baseStats.spDefense).toEqual(BaseStatsSpDefense.from(85));
      expect(baseStats.speed).toEqual(BaseStatsSpeed.from(102));
    });

    it('HPの種族値が不正なとき、エラーになること', () => {
      expect(() => BaseStats.from(-1, 100, 100, 100, 100, 100)).toThrow(
        InvalidPokemonException,
      );
    });

    it('こうげきの種族値が不正なとき、エラーになること', () => {
      expect(() => BaseStats.from(100, -1, 100, 100, 100, 100)).toThrow(
        InvalidPokemonException,
      );
    });

    it('ぼうぎょの種族値が不正なとき、エラーになること', () => {
      expect(() => BaseStats.from(100, 100, -1, 100, 100, 100)).toThrow(
        InvalidPokemonException,
      );
    });

    it('とくこうの種族値が不正なとき、エラーになること', () => {
      expect(() => BaseStats.from(100, 100, 100, -1, 100, 100)).toThrow(
        InvalidPokemonException,
      );
    });

    it('とくぼうの種族値が不正なとき、エラーになること', () => {
      expect(() => BaseStats.from(100, 100, 100, 100, -1, 100)).toThrow(
        InvalidPokemonException,
      );
    });

    it('すばやさの種族値が不正なとき、エラーになること', () => {
      expect(() => BaseStats.from(100, 100, 100, 100, 100, -1)).toThrow(
        InvalidPokemonException,
      );
    });
  });
});
