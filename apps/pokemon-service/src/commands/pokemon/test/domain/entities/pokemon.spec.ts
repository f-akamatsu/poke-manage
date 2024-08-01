import { Type } from '@packages/common-enum';
import { PokedexNo } from '../../../domain/value-objects/pokedex-no';
import { PokemonName } from '../../../domain/value-objects/pokemon-name';
import { Pokemon } from '../../../domain/entities/pokemon';
import { IsDeleted } from '../../../domain/value-objects/is-deleted';
import { PokemonCreatedEvent } from '../../../domain/events/pokemon-created.event';

describe('Pokemon', () => {
  describe('Create', () => {
    describe('バリデーション', () => {
      it('正しいイベントのときにドメインの各プロパティが正しいこと', () => {
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
    });
  });
});
