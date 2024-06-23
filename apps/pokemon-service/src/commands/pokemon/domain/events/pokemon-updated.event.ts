import { DomainEvent } from '@event-nest/core';

@DomainEvent('PokemonUpdatedEvent')
export class PokemonUpdatedEvent {
  constructor(
    public readonly name: string,
    public readonly pokedexNo: number,
  ) {}
}
