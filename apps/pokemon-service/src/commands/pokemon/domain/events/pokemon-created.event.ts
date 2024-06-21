import { IEvent } from '@nestjs/cqrs';

export class PokemonCreatedEvent implements IEvent {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly pokedexNo: number,
  ) {}
}
