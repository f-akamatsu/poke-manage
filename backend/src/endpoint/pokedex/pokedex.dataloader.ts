import { Injectable, Scope } from "@nestjs/common";
import { BaseDataloader } from "../common/base.dataloader";
import { MoveByLevelUpType } from "src/service/pokedex/type/pokedex.type";
import { PokedexService } from "src/service/pokedex/pokedex.service";

@Injectable({ scope: Scope.REQUEST })
export class MoveByLevelUpDataloader extends BaseDataloader<string, MoveByLevelUpType> {

  constructor(private readonly pokedexService: PokedexService) {
    super();
  }

  protected async batchLoad(pokedexIdList: string[]): Promise<(MoveByLevelUpType | Error)[]> {
    const moveByLevelUpList = await this.pokedexService.findMoveByLevelUpListByPokedexIdList(pokedexIdList);

    const pokedexMoveByLevelUpListMap = {};
    for (const moveByLevelUp of moveByLevelUpList) {
      if (!pokedexMoveByLevelUpListMap[moveByLevelUp.pokedexId]) {
        pokedexMoveByLevelUpListMap[moveByLevelUp.pokedexId] = [];
      }
      pokedexMoveByLevelUpListMap[moveByLevelUp.pokedexId].push(moveByLevelUp);
    }

    return pokedexIdList.map((pokedexId) => pokedexMoveByLevelUpListMap[pokedexId] || []);
  }
}