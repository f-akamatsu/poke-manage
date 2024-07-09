import { DomainEvent } from '@event-nest/core';

@DomainEvent('PokemonCreatedEvent')
export class PokemonCreatedEvent {
  constructor(
    public readonly name: string,
    public readonly pokedexNo: number,
    public readonly typeId1: string,
    public readonly typeId2?: string,
  ) {}
}
