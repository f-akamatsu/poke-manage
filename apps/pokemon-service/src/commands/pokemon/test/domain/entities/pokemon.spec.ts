import { Type } from '@packages/common-enum';
import { Pokemon } from '../../../domain/entities/pokemon';
import { PokemonCreatedEvent } from '../../../domain/events/pokemon-created.event';
import { InvalidPokemonException } from '../../../domain/exceptions/invalid-pokemon.exception';
import { IsDeleted } from '../../../domain/value-objects/is-deleted';
import { PokedexNo } from '../../../domain/value-objects/pokedex-no';
import { PokemonName } from '../../../domain/value-objects/pokemon-name';

describe('Pokemon', () => {
  describe('Create', () => {
    describe('バリデーション', () => {
      it('正しいイベントのとき、正しい値でドメインが作成されること', () => {
        const pokemon = Pokemon.create(
          new PokemonCreatedEvent(
            'フシギダネ',
            1,
            Type.GRASS.id,
            Type.POISON.id,
          ),
        );

        expect(pokemon.version).toBe(0);
        expect(pokemon.pokemonId).toEqual(expect.anything());
        expect(pokemon.name).toEqual(PokemonName.from('フシギダネ'));
        expect(pokemon.pokedexNo).toEqual(PokedexNo.from(1));
        expect(pokemon.type1).toEqual(Type.GRASS);
        expect(pokemon.type2).toEqual(Type.POISON);
        expect(pokemon.isDeleted).toEqual(IsDeleted.from(false));
      });

      it('ポケモン名が不正なイベントのとき、エラーになること', () => {
        expect(() =>
          Pokemon.create(
            new PokemonCreatedEvent('', 1, Type.NORMAL.id, undefined),
          ),
        ).toThrow(InvalidPokemonException);
      });

      it('図鑑Noが不正なイベントのとき、エラーになること', () => {
        expect(() =>
          Pokemon.create(
            new PokemonCreatedEvent('けつばん', 0, Type.NORMAL.id, undefined),
          ),
        ).toThrow(InvalidPokemonException);
      });

      it('タイプ1のタイプIDが不正なイベントのとき、エラーになること', () => {
        expect(() =>
          Pokemon.create(
            new PokemonCreatedEvent('けつばん', 0, '20', undefined),
          ),
        ).toThrow(Error);
      });

      it('タイプ2のタイプIDが不正なイベントのとき、エラーになること', () => {
        expect(() =>
          Pokemon.create(
            new PokemonCreatedEvent('けつばん', 0, Type.NORMAL.id, '20'),
          ),
        ).toThrow(Error);
      });
    });

    describe('タイプのパターン', () => {
      it('単タイプのポケモンが正しく作成されること', () => {
        const pokemon = Pokemon.create(
          new PokemonCreatedEvent(
            'ピカチュウ',
            25,
            Type.ELECTRIC.id,
            undefined,
          ),
        );

        expect(pokemon.version).toBe(0);
        expect(pokemon.pokemonId).toEqual(expect.anything());
        expect(pokemon.name).toEqual(PokemonName.from('ピカチュウ'));
        expect(pokemon.pokedexNo).toEqual(PokedexNo.from(25));
        expect(pokemon.type1).toEqual(Type.ELECTRIC);
        expect(pokemon.type2).toBeUndefined();
        expect(pokemon.isDeleted).toEqual(IsDeleted.from(false));
      });

      it('複数タイプのポケモンが正しく作成されること', () => {
        const pokemon = Pokemon.create(
          new PokemonCreatedEvent(
            'トゲキッス',
            468,
            Type.FAIRY.id,
            Type.FLYING.id,
          ),
        );

        expect(pokemon.version).toBe(0);
        expect(pokemon.pokemonId).toEqual(expect.anything());
        expect(pokemon.name).toEqual(PokemonName.from('トゲキッス'));
        expect(pokemon.pokedexNo).toEqual(PokedexNo.from(468));
        expect(pokemon.type1).toEqual(Type.FAIRY);
        expect(pokemon.type2).toEqual(Type.FLYING);
        expect(pokemon.isDeleted).toEqual(IsDeleted.from(false));
      });
    });
  });
});
