import { Module } from '@nestjs/common';
import { PokemonQueryModule } from './queries/pokemon/pokemon-query.module';
import { CustomCqrsModule } from './common/custom-cqrs.module';
import { PokemonModule } from './commands/pokemon/pokemon.module';
import { PrismaModule } from './common/prisma/prisma.module';
import { EventNestMongoDbModule } from '@event-nest/mongodb';

@Module({
  imports: [
    // 共通
    CustomCqrsModule,
    PrismaModule,
    EventNestMongoDbModule.register({
      connectionUri: 'mongodb://user:password@localhost:27017/pokemon',
      aggregatesCollection: 'aggregates-collection',
      eventsCollection: 'events-collection',
    }),
    // Queries
    PokemonQueryModule,
    // Commands
    PokemonModule,
  ],
})
export class AppModule {}
