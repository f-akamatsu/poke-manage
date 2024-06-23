import {
  DomainEventSubscription,
  OnDomainEvent,
  PublishedDomainEvent,
} from '@event-nest/core';
import { Injectable } from '@nestjs/common';
import { PokemonCreatedEvent } from '../../domain/events/pokemon-created.event';

@Injectable()
@DomainEventSubscription(PokemonCreatedEvent)
export class PokemonEventSubscription
  implements OnDomainEvent<PokemonCreatedEvent>
{
  onDomainEvent(
    event: PublishedDomainEvent<PokemonCreatedEvent>,
  ): Promise<void> {
    console.log(event);
    return Promise.resolve();
  }
}
