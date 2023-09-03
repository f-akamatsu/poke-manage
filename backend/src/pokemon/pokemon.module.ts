import { Module } from '@nestjs/common';
import { PokemonUseCase } from './useCase/pokemon.useCase';
import { PokemonResolver } from './presenter/pokemon.resolver';
import { PokemonRepositoryMySQL } from './infrastructure/pokemon.repository.mysql';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [
    PokemonUseCase, 
    PokemonResolver,
    { provide: "REPOSITORY", useClass: PokemonRepositoryMySQL },
    PrismaService
  ]
})
export class PokemonModule {}
