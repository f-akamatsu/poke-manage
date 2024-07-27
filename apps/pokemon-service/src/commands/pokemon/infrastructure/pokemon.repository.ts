import { Inject, NotFoundException } from '@nestjs/common';
import { Pokemon } from '../domain/entities/pokemon';
import { IPokemonRepository } from '../domain/repository/pokemon.repository.interface';
import { EVENT_STORE, EventStore } from '@event-nest/core';
import { PokemonId } from '../domain/value-objects/pokemon-id';

export class PokemonRepository implements IPokemonRepository {
  constructor(@Inject(EVENT_STORE) private eventStore: EventStore) {}

  /**
   *
   */
  async findById(pokemonId: PokemonId): Promise<Pokemon> {
    const events = await this.eventStore.findByAggregateRootId(
      Pokemon,
      pokemonId.value,
    );
    const pokemon = Pokemon.fromEvents(pokemonId, events);

    if (!pokemon.version || pokemon.isDeleted.value) {
      throw new NotFoundException(
        `Pokemon Not Found. PokemonId is [${pokemonId.value}].`,
      );
    }

    return pokemon;
  }

  /**
   *
   */
  async save(pokemon: Pokemon): Promise<void> {
    const pokemonWithPublisher = this.eventStore.addPublisher(pokemon);
    await pokemonWithPublisher.commit();
  }
}
