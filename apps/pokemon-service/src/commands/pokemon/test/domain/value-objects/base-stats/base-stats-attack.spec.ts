import { InvalidPokemonException } from '../../../../domain/exceptions/invalid-pokemon.exception';
import { BaseStatsAttack } from '../../../../domain/value-objects/base-stats/base-stats-attack';

describe('BaseStatsAttack', () => {
  describe('バリデーション', () => {
    it('100のとき、値が正しいこと', () => {
      const baseStatsAttack = BaseStatsAttack.from(100);
      expect(baseStatsAttack.value).toBe(100);
    });

    it('0のとき、値が正しいこと', () => {
      const baseStatsAttack = BaseStatsAttack.from(0);
      expect(baseStatsAttack.value).toBe(0);
    });

    it('文字列のとき、エラーになること', () => {
      expect(() => BaseStatsAttack.from('1' as never)).toThrow(
        InvalidPokemonException,
      );
    });

    it('-1のとき、エラーになること', () => {
      expect(() => BaseStatsAttack.from(-1)).toThrow(InvalidPokemonException);
    });

    it('1.5（≠整数）のとき、エラーになること', () => {
      expect(() => BaseStatsAttack.from(1.5)).toThrow(InvalidPokemonException);
    });
  });
});
