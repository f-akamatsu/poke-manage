import { Inject } from '@nestjs/common';
import { Pokemon } from '../domain/entities/pokemon';
import { IPokemonRepository } from '../domain/repository/pokemon.repository.interface';
import { EVENT_STORE, EventStore } from '@event-nest/core';

export class PokemonRepository implements IPokemonRepository {
  constructor(@Inject(EVENT_STORE) private eventStore: EventStore) {}

  /**
   *
   */
  async findById(id: string): Promise<Pokemon> {
    const events = await this.eventStore.findByAggregateRootId(Pokemon, id);
    const pokemon = Pokemon.fromEvents(id, events);
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
