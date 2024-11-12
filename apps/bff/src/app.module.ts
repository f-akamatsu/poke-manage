import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CustomGraphQLModule } from './common/graphql/custom-graphql.module';
import { ValidateGraphQLMiddleware } from './middlewares/validate-graphql.middleware';
import { PokemonModule } from './modules/pokemon/pokemon.module';

@Module({
  imports: [
    // Common
    CustomGraphQLModule,
    // modules
    PokemonModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ValidateGraphQLMiddleware)
      .forRoutes({ path: 'graphql', method: RequestMethod.POST });
  }
}
