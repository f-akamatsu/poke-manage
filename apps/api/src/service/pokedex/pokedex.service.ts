import { Inject, Injectable } from '@nestjs/common';
import { IPokedexRepository } from './pokedex.repository.interface';
import {
  CreatePokedexType,
  MoveByLevelUpType,
  PokedexType,
  UpdatePokedexType,
} from './type/pokedex.type';
import { Pokedex } from './domain/entity/pokedex.entity';
import { PokemonName } from './domain/value/pokemonName';
import { PokedexNo } from './domain/value/pokedexNo';

@Injectable()
export class PokedexService {
  constructor(
    @Inject('REPOSITORY')
    private readonly pokedexRepository: IPokedexRepository
  ) {}

  /**
   * ポケモン図鑑情報を全て取得する
   */
  async findAllPokedex(): Promise<PokedexType[]> {
    return await this.pokedexRepository.findAllPokedex();
  }

  /**
   * IDでポケモン図鑑情報を取得する
   */
  async findPokedexById(pokedexId: string): Promise<PokedexType> {
    return await this.pokedexRepository.findPokedexById(pokedexId);
  }

  /**
   * ポケモン図鑑情報を登録する
   */
  async create(createPokedexType: CreatePokedexType): Promise<void> {
    const createPokedex = Pokedex.createNew(
      createPokedexType.pokemonName,
      createPokedexType.pokedexNo
    );
    const pokedex = await this.pokedexRepository.save(createPokedex);
  }

  /**
   * ポケモン図鑑情報を更新する
   */
  async update(updatePokedexType: UpdatePokedexType): Promise<void> {
    const pokedexType = await this.pokedexRepository.findPokedexById(updatePokedexType.pokedexId);

    const pokedex = Pokedex.create(
      pokedexType.pokedexId,
      pokedexType.pokemonName,
      pokedexType.pokedexNo
    );

    if (updatePokedexType.pokemonName)
      pokedex.setPokemonName(new PokemonName(updatePokedexType.pokemonName));
    if (updatePokedexType.pokedexNo)
      pokedex.setPokedexNo(new PokedexNo(updatePokedexType.pokedexNo));

    await this.pokedexRepository.save(pokedex);
  }

  async findMoveByLevelUpListByPokedexIdList(
    pokedexIdList: string[]
  ): Promise<MoveByLevelUpType[]> {
    return await this.pokedexRepository.findMoveByLevelUpListByPokedexIdList(pokedexIdList);
  }
}
