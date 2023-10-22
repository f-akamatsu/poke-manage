import { Module } from '@nestjs/common';
import { PokedexResolver } from './pokedex.resolver';
import { PokedexServiceModule } from 'src/services/pokedex/pokedex.service.module';

@Module({
  providers: [ PokedexResolver ],
  imports: [ PokedexServiceModule ]
})
export class PokedexEndpointModule {}
