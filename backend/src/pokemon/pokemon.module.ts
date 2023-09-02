import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonResolver } from './pokemon.resolver';
import { PokemonRepositoryMySQL } from './infra/pokemon.repository.mysql';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [
    PokemonService, 
    PokemonResolver,
    { provide: "REPOSITORY", useClass: PokemonRepositoryMySQL },
    PrismaService
  ]
})
export class PokemonModule {}
