import { Module } from '@nestjs/common';
import { PokemonModule } from './modules/pokemon/pokemon.module';
import { CustomGraphQLModule } from './common/graphql/custom-graphql.module';

@Module({
  imports: [
    // Common
    CustomGraphQLModule,
    // modules
    PokemonModule,
  ],
})
export class AppModule {}
