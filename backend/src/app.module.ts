import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { PokedexEndpointModule } from './endpoint/pokedex/pokedex.endpoint.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/endpoint/schema.gql')
    }),
    PokedexEndpointModule,
  ],
})
export class AppModule {}
