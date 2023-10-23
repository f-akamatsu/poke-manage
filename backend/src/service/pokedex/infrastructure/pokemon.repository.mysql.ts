import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/service/prisma.service";
import { IPokedexRepository } from "../pokedex.repository.interface";
import { Pokedex } from "../domain/entity/pokedex.entity";


@Injectable()
export class PokedexRepositoryMySQL implements IPokedexRepository {
  
  constructor(private readonly prismaService: PrismaService) {}
  
  /**
   * 
   */
  async findAll(): Promise<Pokedex[]> {
    const dataList = await this.prismaService.pokemon.findMany();

    const pokemonList = [];
    for (const data of dataList) {
      const pokemon = Pokedex.create(data.id, data.name, data.pokedex_no);
      pokemonList.push(pokemon);
    }

    return pokemonList;
  }

  /**
   * 
   */
  async findOne(id: string): Promise<Pokedex> {
    const data = await this.prismaService.pokemon.findUnique({where: {id}});

    return Pokedex.create(data.id, data.name, data.pokedex_no);
  }
  
  /**
   * 
   */
  async save(pokemon: Pokedex): Promise<Pokedex> {
    const array = pokemon.toArray();

    const data = await this.prismaService.pokemon.upsert({
      where: {
        id: array.pokedexId,
      },
      update: {
        name: array.name,
        pokedex_no: array.pokedexNo,
      },
      create: {
        id: array.pokedexId,
        name: array.name,
        pokedex_no: array.pokedexNo
      },
    });

    return Pokedex.create(data.id, data.name, data.pokedex_no);
  }

}