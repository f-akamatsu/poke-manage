import {
  AggregateRoot,
  AggregateRootName,
  ApplyEvent,
  StoredEvent,
} from '@event-nest/core';
import { PokedexNo } from '../value-objects/pokedex-no';
import { PokemonName } from '../value-objects/pokemon-name';
import { PokemonCreatedEvent } from '../events/pokemon-created.event';

/**
 * ポケモン
 */
@AggregateRootName('Pokemon')
export class Pokemon extends AggregateRoot {
  /** ポケモン名 */
  private name: PokemonName;
  /** 図鑑番号 */
  private pokedexNo: PokedexNo;

  private constructor(id: string) {
    super(id);
  }

  public static createNew(
    id: string,
    name: string,
    pokedexNo: number,
  ): Pokemon {
    const pokemon = new Pokemon(id);
    const event = new PokemonCreatedEvent(name, pokedexNo);
    pokemon.applyPokemonCreatedEvent(event);
    pokemon.append(event);
    return pokemon;
  }

  public static fromEvents(id: string, events: Array<StoredEvent>): Pokemon {
    const pokemon = new Pokemon(id);
    pokemon.reconstitute(events);
    return pokemon;
  }

  @ApplyEvent(PokemonCreatedEvent)
  private applyPokemonCreatedEvent(event: PokemonCreatedEvent) {
    this.name = new PokemonName(event.name);
    this.pokedexNo = new PokedexNo(event.pokedexNo);
  }
}
