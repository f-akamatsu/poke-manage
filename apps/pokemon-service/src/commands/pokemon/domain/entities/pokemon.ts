import { AggregateRoot } from '@nestjs/cqrs';
import { PokedexNo } from '../value-objects/pokedex-no';
import { PokemonId } from '../value-objects/pokemon-id';
import { PokemonName } from '../value-objects/pokemon-name';

/**
 * ポケモン
 */
export class Pokemon extends AggregateRoot {
  constructor(
    /** ID */
    private id: PokemonId,
    /** 図鑑番号 */
    private pokedexNo: PokedexNo,
    /** ポケモン名 */
    private name: PokemonName,
  ) {
    super();
  }
}
