import { Module } from '@nestjs/common';
import { CustomGraphQLModule } from './common/graphql/custom-graphql.module';
import { PokemonModule } from './modules/pokemon/pokemon.module';

@Module({
  imports: [
    // Common
    CustomGraphQLModule,
    // modules
    PokemonModule,
  ],
})
export class AppModule {}
