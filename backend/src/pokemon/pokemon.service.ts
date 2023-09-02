import { Injectable } from '@nestjs/common';
import { Pokemon } from './models/pokemon.models';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PokemonService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll(): Promise<Pokemon[]> {
    return this.prismaService.pokemon.findMany();
  }

  findOneById(id: number): Promise<Pokemon> {
    return this.prismaService.pokemon.findUnique({where: { id }});
  }
}
