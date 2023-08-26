import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonResolver } from './pokemon.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [PokemonService, PokemonResolver, PrismaService]
})
export class PokemonModule {}
