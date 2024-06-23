import { EventNestMongoDbModule } from '@event-nest/mongodb';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    EventNestMongoDbModule.register({
      connectionUri: 'mongodb://user:password@localhost:27017/pokemon',
      aggregatesCollection: 'aggregates-collection',
      eventsCollection: 'events-collection',
    }),
  ],
})
export class EventStoreModule {}
