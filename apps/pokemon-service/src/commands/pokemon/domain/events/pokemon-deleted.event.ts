import { DomainEvent } from '@event-nest/core';

@DomainEvent('PokemonDeletedEvent')
export class PokemonDeletedEvent {}
