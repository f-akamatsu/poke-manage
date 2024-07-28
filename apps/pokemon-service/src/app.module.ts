import { Module } from '@nestjs/common';
import { PokemonQueryModule } from './queries/pokemon/pokemon-query.module';
import { PokemonModule } from './commands/pokemon/pokemon.module';
import { PrismaModule } from './common/prisma/prisma.module';
import { EventStoreModule } from './common/event-store/event-store.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [
    // 共通
    ConfigModule.forRoot({ isGlobal: true }),
    {
      global: true,
      module: CqrsModule,
    },
    PrismaModule,
    EventStoreModule,
    EventEmitterModule.forRoot({ wildcard: true }),
    // Queries
    PokemonQueryModule,
    // Commands
    PokemonModule,
  ],
})
export class AppModule {}
