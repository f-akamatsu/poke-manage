import {
  DomainEventSubscription,
  OnDomainEvent,
  PublishedDomainEvent,
} from '@event-nest/core';
import { Injectable } from '@nestjs/common';
import { PokemonCreatedEvent } from '../../domain/events/pokemon-created.event';

@Injectable()
@DomainEventSubscription({
  eventClasses: [PokemonCreatedEvent],
  isAsync: false,
})
export class TestPokemonEventHandler
  implements OnDomainEvent<PokemonCreatedEvent>
{
  onDomainEvent(
    event: PublishedDomainEvent<PokemonCreatedEvent>,
  ): Promise<unknown> {
    console.log('***** PokemonCreatedEventSubscription Start *****');

    console.log('PokemonCreatedEventSubscription', event);
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('***** PokemonCreatedEventSubscription End *****');
        resolve(undefined);
      }, 3000);
    });
  }
}
