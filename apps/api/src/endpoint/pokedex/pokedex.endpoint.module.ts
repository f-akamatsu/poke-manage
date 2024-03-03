import { Module } from '@nestjs/common';
import { PokedexResolver } from './pokedex.resolver';
import { PokedexServiceModule } from '../../service/pokedex/pokedex.service.module';
import { MoveByLevelUpDataloader } from './pokedex.dataloader';

@Module({
  providers: [PokedexResolver, MoveByLevelUpDataloader],
  imports: [PokedexServiceModule],
})
export class PokedexEndpointModule {}
