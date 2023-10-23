import { Module } from '@nestjs/common';
import { PokedexRepositoryMySQL } from './infrastructure/pokemon.repository.mysql';
import { PokedexService } from './pokedex.service';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [
    PokedexService,
    { provide: 'REPOSITORY', useClass: PokedexRepositoryMySQL },
    PrismaService
  ],
  exports: [ PokedexService ]
})
export class PokedexServiceModule {}
