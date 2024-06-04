import { Module } from '@nestjs/common';
import { PokemonQueryModule } from './queries/pokemon/pokemon-query.module';
import { CustomCqrsModule } from './common/custom-cqrs.module';
import { PokemonModule } from './commands/pokemon/pokemon.module';
import { PrismaModule } from './common/prisma/prisma.module';

@Module({
  imports: [
    // 共通
    CustomCqrsModule,
    PrismaModule,
    // Queries
    PokemonQueryModule,
    // Commands
    PokemonModule,
  ],
})
export class AppModule {}
