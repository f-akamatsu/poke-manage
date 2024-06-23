import { Module } from '@nestjs/common';
import { PokemonQueryModule } from './queries/pokemon/pokemon-query.module';
import { CustomCqrsModule } from './common/custom-cqrs.module';
import { PokemonModule } from './commands/pokemon/pokemon.module';
import { PrismaModule } from './common/prisma/prisma.module';
import { EventStoreModule } from './common/event-store/event-store.module';

@Module({
  imports: [
    // 共通
    CustomCqrsModule,
    PrismaModule,
    EventStoreModule,
    // Queries
    PokemonQueryModule,
    // Commands
    PokemonModule,
  ],
})
export class AppModule {}
