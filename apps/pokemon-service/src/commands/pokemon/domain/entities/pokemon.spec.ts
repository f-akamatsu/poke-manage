import { Type } from '@packages/common-enum';
import { PokedexNo } from '../value-objects/pokedex-no';
import { PokemonName } from '../value-objects/pokemon-name';
import { Pokemon } from './pokemon';
import { IsDeleted } from '../value-objects/is-deleted';
import { PokemonCreatedEvent } from '../events/pokemon-created.event';

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
