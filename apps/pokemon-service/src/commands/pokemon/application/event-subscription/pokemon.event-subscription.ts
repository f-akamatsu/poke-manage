import {
  DomainEventSubscription,
  OnDomainEvent,
  PublishedDomainEvent,
} from '@event-nest/core';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../../../../common/prisma/prisma.service';
import { PokemonBaseStatsUpdatedEvent } from '../../domain/events/pokemon-base-stats-updated.event';
import { PokemonCreatedEvent } from '../../domain/events/pokemon-created.event';
import { PokemonDeletedEvent } from '../../domain/events/pokemon-deleted.event';
import { PokemonNameUpdatedEvent } from '../../domain/events/pokemon-name-updated.event';

@Injectable()
@DomainEventSubscription({
  eventClasses: [
    PokemonCreatedEvent,
    PokemonNameUpdatedEvent,
    PokemonBaseStatsUpdatedEvent,
    PokemonDeletedEvent,
  ],
  isAsync: false,
})
export class PokemonEventSubscription
  implements
    OnDomainEvent<
      | PokemonCreatedEvent
      | PokemonNameUpdatedEvent
      | PokemonBaseStatsUpdatedEvent
      | PokemonDeletedEvent
    >
{
  constructor(private readonly prisma: PrismaService) {}

  async onDomainEvent(
    event: PublishedDomainEvent<
      | PokemonCreatedEvent
      | PokemonNameUpdatedEvent
      | PokemonBaseStatsUpdatedEvent
      | PokemonDeletedEvent
    >,
  ): Promise<void> {
    const pokemonId = event.aggregateRootId;
    const payload = event.payload;

    if (payload instanceof PokemonCreatedEvent) {
      await this.pokemonCreatedEventSubscription(pokemonId, payload);
    } else if (payload instanceof PokemonNameUpdatedEvent) {
      await this.pokemonNameUpdatedEventSubscription(pokemonId, payload);
    } else if (payload instanceof PokemonBaseStatsUpdatedEvent) {
      await this.pokemonBaseStatsUpdatedEventSubscription(pokemonId, payload);
    } else if (payload instanceof PokemonDeletedEvent) {
      await this.pokemonDeletedEventSubscription(pokemonId);
    } else {
      throw new InternalServerErrorException(
        '不正なPokemonイベントが発生しました。',
      );
    }
  }

  /**
   * ポケモン新規登録イベントのサブスクリプション
   */
  private async pokemonCreatedEventSubscription(
    pokemonId: string,
    payload: PokemonCreatedEvent,
  ): Promise<void> {
    await this.prisma.pokemonRM.create({
      data: {
        pokemon_id: pokemonId,
        name: payload.name,
        pokedex_no: payload.pokedexNo,
        type_id_1: payload.typeId1,
        type_id_2: payload.typeId2,
        hit_points: 0,
        attack: 0,
        defense: 0,
        sp_attack: 0,
        sp_defense: 0,
        speed: 0,
      },
    });
  }

  /**
   * ポケモンの名前変更イベントのサブスクリプション
   */
  private async pokemonNameUpdatedEventSubscription(
    pokemonId: string,
    payload: PokemonNameUpdatedEvent,
  ): Promise<void> {
    await this.prisma.pokemonRM.update({
      where: { pokemon_id: pokemonId },
      data: { name: payload.name },
    });
  }

  /**
   * ポケモンの種族値変更イベントのサブスクリプション
   */
  private async pokemonBaseStatsUpdatedEventSubscription(
    pokemonId: string,
    payload: PokemonBaseStatsUpdatedEvent,
  ): Promise<void> {
    await this.prisma.pokemonRM.update({
      where: { pokemon_id: pokemonId },
      data: {
        hit_points: payload.hitPoints,
        attack: payload.attack,
        defense: payload.defense,
        sp_attack: payload.spAttack,
        sp_defense: payload.spDefense,
        speed: payload.speed,
      },
    });
  }

  /**
   * ポケモン削除イベントのサブスクリプション
   */
  private async pokemonDeletedEventSubscription(
    pokemonId: string,
  ): Promise<void> {
    await this.prisma.pokemonRM.delete({
      where: { pokemon_id: pokemonId },
    });
  }
}
