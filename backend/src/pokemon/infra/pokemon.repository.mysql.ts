import { Injectable } from "@nestjs/common";
import { Pokemon } from "../models/pokemon.models";
import { IPokemonRepository } from "../models/pokemon.repository.interface";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class PokemonRepositoryMySQL implements IPokemonRepository {
  
  constructor(private readonly prismaService: PrismaService) {}
  
  async findAll(): Promise<Pokemon[]> {
    const dataList = await this.prismaService.pokemon.findMany();

    const pokemonList = [];
    for (const data of dataList) {
      const pokemon = new Pokemon(data.id, data.name, data.pokedex_no);
      pokemonList.push(pokemon);
    }

    return pokemonList;
  }

  async findOne(id: string): Promise<Pokemon> {
    const data = await this.prismaService.pokemon.findUnique({where: {id}});

    return new Pokemon(data.id, data.name, data.pokedex_no);
  }
  
}