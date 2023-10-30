import { Pokedex } from "./domain/entity/pokedex.entity";
import { MoveByLevelUpType, PokedexType } from "./type/pokedex.type";

export interface IPokedexRepository {

  findAllPokedex(): Promise<PokedexType[]>;
  findPokedexById(id: string): Promise<PokedexType>;
  save(pokemon: Pokedex): Promise<void>;
  findMoveByLevelUpListByPokedexIdList(pokdexIdList: string[]): Promise<MoveByLevelUpType[]>;

}