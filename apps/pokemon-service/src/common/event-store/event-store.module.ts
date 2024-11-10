import { EventNestMongoDbModule } from '@event-nest/mongodb';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    EventNestMongoDbModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        connectionUri: configService.getOrThrow<string>('EVENTSTORE_URL'),
        aggregatesCollection: 'aggregates-collection',
        eventsCollection: 'events-collection',
      }),
    }),
  ],
})
export class EventStoreModule {}
