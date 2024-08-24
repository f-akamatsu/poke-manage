import {
  AggregateRoot,
  AggregateRootName,
  ApplyEvent,
  StoredEvent,
} from '@event-nest/core';
import { Type } from '@packages/common-enum';
import { Optional } from 'typescript-optional';
import { PokemonBaseStatsUpdatedEvent } from '../events/pokemon-base-stats-updated.event';
import { PokemonCreatedEvent } from '../events/pokemon-created.event';
import { PokemonDeletedEvent } from '../events/pokemon-deleted.event';
import { PokemonNameUpdatedEvent } from '../events/pokemon-name-updated.event';
import { BaseStats } from '../value-objects/base-stats/base-stats';
import { IsDeleted } from '../value-objects/is-deleted';
import { PokedexNo } from '../value-objects/pokedex-no';
import { PokemonId } from '../value-objects/pokemon-id';
import { PokemonName } from '../value-objects/pokemon-name';

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
  /** 種族値 */
  private _baseStats: BaseStats;
  /** 削除フラグ */
  private _isDeleted: IsDeleted;

  private constructor(pokemonId: PokemonId) {
    super(pokemonId.value);
    this._pokemonId = pokemonId;
  }

  /**
   * 新規登録する
   */
  public static create(event: PokemonCreatedEvent): Pokemon {
    const pokemonId = PokemonId.generate();
    const pokemon = new Pokemon(pokemonId);
    pokemon.applyPokemonCreatedEvent(event);
    pokemon.append(event);
    return pokemon;
  }

  /**
   * 名前を変更する
   */
  public updateName(event: PokemonNameUpdatedEvent): void {
    this.applyPokemonNameUpdatedEvent(event);
    this.append(event);
  }

  /**
   * 削除する
   */
  public delete(event: PokemonDeletedEvent): void {
    this.applyPokemonDeletedEvent(event);
    this.append(event);
  }

  /**
   * 種族値を変更する
   */
  public updateBaseStats(event: PokemonBaseStatsUpdatedEvent): void {
    this.applyPokemonBaseStatsUpdatedEvent(event);
    this.append(event);
  }

  /**
   * イベントから復元する
   */
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
    this._name = PokemonName.from(event.name);
    this._pokedexNo = PokedexNo.from(event.pokedexNo);
    this._type1 = Type.fromId(event.typeId1);
    this._type2 = Optional.ofNullable(event.typeId2)
      .map(Type.fromId)
      .orUndefined();
    this._baseStats = BaseStats.createEmpty();
    this._isDeleted = IsDeleted.from(false);
  }

  @ApplyEvent(PokemonNameUpdatedEvent)
  private applyPokemonNameUpdatedEvent(event: PokemonNameUpdatedEvent) {
    this._name = PokemonName.from(event.name);
  }

  @ApplyEvent(PokemonDeletedEvent)
  private applyPokemonDeletedEvent(_event: PokemonDeletedEvent) {
    this._isDeleted = IsDeleted.from(true);
  }

  @ApplyEvent(PokemonBaseStatsUpdatedEvent)
  private applyPokemonBaseStatsUpdatedEvent(
    event: PokemonBaseStatsUpdatedEvent,
  ) {
    this._baseStats = BaseStats.from(
      event.hitPoints,
      event.attack,
      event.defense,
      event.spAttack,
      event.spDefense,
      event.speed,
    );
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

  public get baseStats(): BaseStats {
    return this._baseStats;
  }

  public get isDeleted(): IsDeleted {
    return this._isDeleted;
  }
}
