import {
  DomainEventSubscription,
  OnDomainEvent,
  PublishedDomainEvent,
} from '@event-nest/core';
import { Inject, Injectable } from '@nestjs/common';
import { PokemonCreatedEvent } from '../../domain/events/pokemon-created.event';
import { PokemonId } from '../../domain/value-objects/pokemon-id';
import {
  IPokemonRepository,
  POKEMON_REPOSITORY_TOKEN,
} from '../../domain/repository/pokemon.repository.interface';
import { Pokemon } from '../../domain/entities/pokemon';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { PokemonRM } from '@prisma/client';
import { PokemonUpdatedEvent } from '../../domain/events/pokemon-updated.event';

@Injectable()
@DomainEventSubscription(PokemonCreatedEvent, PokemonUpdatedEvent)
export class PokemonEventSubscription
  implements OnDomainEvent<PokemonCreatedEvent | PokemonUpdatedEvent>
{
  constructor(
    @Inject(POKEMON_REPOSITORY_TOKEN)
    private readonly pokemonRepository: IPokemonRepository,
    private readonly prisma: PrismaService,
  ) {}

  async onDomainEvent(
    event: PublishedDomainEvent<PokemonCreatedEvent | PokemonUpdatedEvent>,
  ): Promise<void> {
    const pokemonId = PokemonId.from(event.aggregateRootId);
    const pokemon = await this.pokemonRepository.findById(pokemonId);

    this.upsert(pokemon);
  }

  private async upsert(pokemon: Pokemon): Promise<void> {
    const pokemonRM: PokemonRM = {
      pokemon_id: pokemon.pokemonId.value,
      name: pokemon.name.value,
      pokedex_no: pokemon.pokedexNo.value,
    };

    await this.prisma.pokemonRM.upsert({
      where: {
        pokemon_id: pokemon.pokemonId.value,
      },
      create: pokemonRM,
      update: pokemonRM,
    });
  }
}
