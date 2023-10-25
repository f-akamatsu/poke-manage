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
    const dataList = await this.prismaService.pokedex.findMany();

    const pokemonList = [];
    for (const data of dataList) {
      const pokemon = Pokedex.create(data.pokedex_id, data.name, data.pokedex_no);
      pokemonList.push(pokemon);
    }

    return pokemonList;
  }

  /**
   * 
   */
  async findOne(pokedex_id: string): Promise<Pokedex> {
    const data = await this.prismaService.pokedex.findUnique({where: {pokedex_id}});

    return Pokedex.create(data.pokedex_id, data.name, data.pokedex_no);
  }
  
  /**
   * 
   */
  async save(pokemon: Pokedex): Promise<Pokedex> {
    const array = pokemon.toArray();

    const data = await this.prismaService.pokedex.upsert({
      where: {
        pokedex_id: array.pokedexId,
      },
      update: {
        name: array.name,
        pokedex_no: array.pokedexNo,
      },
      create: {
        pokedex_id: array.pokedexId,
        name: array.name,
        pokedex_no: array.pokedexNo
      },
    });

    return Pokedex.create(data.pokedex_id, data.name, data.pokedex_no);
  }

}