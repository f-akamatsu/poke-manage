import { Injectable } from "@nestjs/common";
import { PokedexPrismaService } from "src/service/pokedex/pokedex.prisma.service";
import { IPokedexRepository } from "../pokedex.repository.interface";
import { Pokedex } from "../domain/entity/pokedex.entity";
import { MoveByLevelUpType, PokedexType } from "../type/pokedex.type";


@Injectable()
export class PokedexRepositoryMySQL implements IPokedexRepository {
  
  constructor(private readonly prismaService: PokedexPrismaService) {}
  
  /**
   * 
   */
  async findAllPokedex(): Promise<PokedexType[]> {
    const pokedexDataList = await this.prismaService.pokedex.findMany();

    const pokedexTypeList: PokedexType[] = [];
    for (const pokedexData of pokedexDataList) {
      pokedexTypeList.push({
        pokedexId: pokedexData.pokedex_id,
        pokemonName: pokedexData.pokemon_name,
        pokedexNo: pokedexData.pokedex_no
      });
    }

    return pokedexTypeList;
  }

  /**
   * 
   */
  async findPokedexById(pokedex_id: string): Promise<PokedexType> {
    const pokedexData = await this.prismaService.pokedex.findUnique({ where: {pokedex_id} });

    return {
      pokedexId: pokedexData.pokedex_id,
      pokemonName: pokedexData.pokemon_name,
      pokedexNo: pokedexData.pokedex_no
    };
  }
  
  /**
   * 
   */
  async save(pokemon: Pokedex): Promise<void> {
    const array = pokemon.toArray();

    const data = await this.prismaService.pokedex.upsert({
      where: {
        pokedex_id: array.pokedexId,
      },
      update: {
        pokemon_name: array.pokemonName,
        pokedex_no: array.pokedexNo,
      },
      create: {
        pokedex_id: array.pokedexId,
        pokemon_name: array.pokemonName,
        pokedex_no: array.pokedexNo
      },
    });
  }

  async findMoveByLevelUpListByPokedexIdList(pokdexIdList: string[]): Promise<MoveByLevelUpType[]> {
    const moveByLevelUpDataList = await this.prismaService.moveByLevelUp.findMany({
      where: { pokedex_id: { in: pokdexIdList } },
      orderBy: [{ level: 'asc'}],
    });

    const moveByLevelUpTypeList: MoveByLevelUpType[] = [];
    for (const moveByLevelUpData of moveByLevelUpDataList) {
      moveByLevelUpTypeList.push({
        pokedexId: moveByLevelUpData.pokedex_id,
        moveId: moveByLevelUpData.move_id,
        level: moveByLevelUpData.level,
      });
    }

    return moveByLevelUpTypeList;
  }
}