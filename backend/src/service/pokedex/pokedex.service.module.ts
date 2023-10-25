import { Module } from '@nestjs/common';
import { PokedexRepositoryMySQL } from './infrastructure/pokedex.repository.mysql';
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
