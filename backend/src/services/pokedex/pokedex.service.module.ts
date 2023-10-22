import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { PokedexRepositoryMySQL } from './infrastructure/pokemon.repository.mysql';
import { PokedexService } from './pokedex.service';

@Module({
  providers: [
    PokedexService,
    { provide: 'REPOSITORY', useClass: PokedexRepositoryMySQL },
    PrismaService
  ],
  exports: [ PokedexService ]
})
export class PokedexServiceModule {}
