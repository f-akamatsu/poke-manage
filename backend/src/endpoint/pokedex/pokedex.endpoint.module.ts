import { Module } from '@nestjs/common';
import { PokedexResolver } from './pokedex.resolver';
import { PokedexServiceModule } from '../../service/pokedex/pokedex.service.module';

@Module({
  providers: [ PokedexResolver ],
  imports: [ PokedexServiceModule ]
})
export class PokedexEndpointModule {}
