import { Injectable } from "@nestjs/common";
import { IPokemonRepository } from "../domain/repository/pokemon.repository.interface";
import { PrismaService } from "src/prisma.service";
import { Pokemon } from "../domain/entity/pokemon.entity";

@Injectable()
export class PokemonRepositoryMySQL implements IPokemonRepository {
  
  constructor(private readonly prismaService: PrismaService) {}
  
  /**
   * 
   */
  async findAll(): Promise<Pokemon[]> {
    const dataList = await this.prismaService.pokemon.findMany();

    const pokemonList = [];
    for (const data of dataList) {
      const pokemon = Pokemon.create(data.id, data.name, data.pokedex_no);
      pokemonList.push(pokemon);
    }

    return pokemonList;
  }

  /**
   * 
   */
  async findOne(id: string): Promise<Pokemon> {
    const data = await this.prismaService.pokemon.findUnique({where: {id}});

    return Pokemon.create(data.id, data.name, data.pokedex_no);
  }
  
  /**
   * 
   */
  async save(pokemon: Pokemon): Promise<Pokemon> {
    const array = pokemon.toArray();

    const data = await this.prismaService.pokemon.upsert({
      where: {
        id: array.id,
      },
      update: {
        name: array.name,
        pokedex_no: array.pokedexNo,
      },
      create: {
        id: array.id,
        name: array.name,
        pokedex_no: array.pokedexNo
      },
    });

    return Pokemon.create(data.id, data.name, data.pokedex_no);
  }

}