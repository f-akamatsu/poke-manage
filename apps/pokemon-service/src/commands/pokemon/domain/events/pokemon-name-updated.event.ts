import { DomainEvent } from '@event-nest/core';

@DomainEvent('PokemonNameUpdatedEvent')
export class PokemonNameUpdatedEvent {
  constructor(public readonly name: string) {}
}
