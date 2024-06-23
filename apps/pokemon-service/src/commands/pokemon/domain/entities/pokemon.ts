import {
  AggregateRoot,
  AggregateRootName,
  ApplyEvent,
  StoredEvent,
} from '@event-nest/core';
import { PokedexNo } from '../value-objects/pokedex-no';
import { PokemonName } from '../value-objects/pokemon-name';
import { PokemonCreatedEvent } from '../events/pokemon-created.event';
import { PokemonId } from '../value-objects/pokemon-id';

/**
 * ポケモン
 */
@AggregateRootName('Pokemon')
export class Pokemon extends AggregateRoot {
  /** ポケモンID */
  private pokemonId: PokemonId;
  /** ポケモン名 */
  private name: PokemonName;
  /** 図鑑番号 */
  private pokedexNo: PokedexNo;

  private constructor(pokemonId: PokemonId) {
    super(pokemonId.value);
    this.pokemonId = pokemonId;
  }

  public static create(event: PokemonCreatedEvent): Pokemon {
    const pokemonId = PokemonId.generate();
    const pokemon = new Pokemon(pokemonId);
    pokemon.applyPokemonCreatedEvent(event);
    pokemon.append(event);
    return pokemon;
  }

  public static fromEvents(
    pokemonId: PokemonId,
    events: Array<StoredEvent>,
  ): Pokemon {
    const pokemon = new Pokemon(pokemonId);
    pokemon.reconstitute(events);
    return pokemon;
  }

  // ==============================
  //  ApplyEvent
  // ==============================
  @ApplyEvent(PokemonCreatedEvent)
  private applyPokemonCreatedEvent(event: PokemonCreatedEvent) {
    this.name = new PokemonName(event.name);
    this.pokedexNo = new PokedexNo(event.pokedexNo);
  }
}
