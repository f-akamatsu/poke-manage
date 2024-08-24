import { DomainEvent } from '@event-nest/core';

@DomainEvent('PokemonBaseStatsUpdatedEvent')
export class PokemonBaseStatsUpdatedEvent {
  constructor(
    public readonly hitPoints: number,
    public readonly attack: number,
    public readonly defense: number,
    public readonly spAttack: number,
    public readonly spDefense: number,
    public readonly speed: number,
  ) {}
}
