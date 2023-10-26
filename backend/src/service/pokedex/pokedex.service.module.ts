import { Module } from '@nestjs/common';
import { PokedexRepositoryMySQL } from './infrastructure/pokedex.repository.mysql';
import { PokedexService } from './pokedex.service';
import { PokedexPrismaService } from './pokedex.prisma.service';

@Module({
  providers: [
    PokedexService,
    { provide: 'REPOSITORY', useClass: PokedexRepositoryMySQL },
    PokedexPrismaService
  ],
  exports: [ PokedexService ]
})
export class PokedexServiceModule {}
