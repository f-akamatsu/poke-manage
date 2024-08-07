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
import { PokemonUpdatedEvent } from '../events/pokemon-updated.event';
import { PokemonDeletedEvent } from '../events/pokemon-deleted.event';
import { IsDeleted } from '../value-objects/is-deleted';
import { Type } from '@packages/common-enum';
import { Optional } from 'typescript-optional';

/**
 * ポケモン
 */
@AggregateRootName('Pokemon')
export class Pokemon extends AggregateRoot {
  /** ポケモンID */
  private _pokemonId: PokemonId;
  /** ポケモン名 */
  private _name: PokemonName;
  /** 図鑑番号 */
  private _pokedexNo: PokedexNo;
  /** タイプ1 */
  private _type1: Type;
  /** タイプ2 */
  private _type2?: Type;
  /** 削除フラグ */
  private _isDeleted: IsDeleted;

  private constructor(pokemonId: PokemonId) {
    super(pokemonId.value);
    this._pokemonId = pokemonId;
  }

  /**
   *
   */
  public static create(event: PokemonCreatedEvent): Pokemon {
    const pokemonId = PokemonId.generate();
    const pokemon = new Pokemon(pokemonId);
    pokemon.applyPokemonCreatedEvent(event);
    pokemon.append(event);
    return pokemon;
  }

  /**
   *
   */
  public static fromEvents(
    pokemonId: PokemonId,
    events: Array<StoredEvent>,
  ): Pokemon {
    const pokemon = new Pokemon(pokemonId);
    pokemon.reconstitute(events);
    return pokemon;
  }

  /**
   *
   */
  public update(event: PokemonUpdatedEvent): void {
    this.applyPokemonUpdatedEvent(event);
    this.append(event);
  }

  /**
   *
   */
  public delete(event: PokemonDeletedEvent): void {
    this.applyPokemonDeletedEvent(event);
    this.append(event);
  }

  // ==============================
  //  ApplyEvent
  // ==============================
  @ApplyEvent(PokemonCreatedEvent)
  private applyPokemonCreatedEvent(event: PokemonCreatedEvent) {
    this._name = new PokemonName(event.name);
    this._pokedexNo = new PokedexNo(event.pokedexNo);
    this._type1 = Type.fromId(event.typeId1);
    this._type2 = Optional.ofNullable(event.typeId2)
      .map(Type.fromId)
      .orUndefined();
    this._isDeleted = new IsDeleted(false);
  }

  @ApplyEvent(PokemonUpdatedEvent)
  private applyPokemonUpdatedEvent(event: PokemonUpdatedEvent) {
    this._name = new PokemonName(event.name);
    this._pokedexNo = new PokedexNo(event.pokedexNo);
    this._type1 = Type.fromId(event.typeId1);
    this._type2 = Optional.ofNullable(event.typeId2)
      .map(Type.fromId)
      .orUndefined();
  }

  @ApplyEvent(PokemonDeletedEvent)
  private applyPokemonDeletedEvent(_event: PokemonDeletedEvent) {
    this._isDeleted = new IsDeleted(true);
  }

  // ==============================
  //  getter
  // ==============================
  public get pokemonId(): PokemonId {
    return this._pokemonId;
  }

  public get name(): PokemonName {
    return this._name;
  }

  public get pokedexNo(): PokedexNo {
    return this._pokedexNo;
  }

  public get type1(): Type {
    return this._type1;
  }

  public get type2(): Type | undefined {
    return this._type2;
  }

  public get isDeleted(): IsDeleted {
    return this._isDeleted;
  }
}
