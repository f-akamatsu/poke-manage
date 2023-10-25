import { Inject, Injectable } from '@nestjs/common';
import { IPokedexRepository } from './pokedex.repository.interface';
import { CreatePokedexType, PokedexType, UpdatePokedexType } from './type/pokemon.type';
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
   * ポケモンを全て取得する
   */
  async findAll(): Promise<PokedexType[]> {
    const pokedexList = await this.pokedexRepository.findAll();
    
    const array = [];
    for (const pokedex of pokedexList) {
      array.push(pokedex.toArray());
    }

    return array;
  }

  /**
   * IDでポケモンを取得する
   */
  async findOneById(pokedexId: string): Promise<PokedexType> {
    const pokedex = await this.pokedexRepository.findOne(pokedexId);
    return pokedex.toArray();
  }

  /**
   * ポケモンを登録する
   */
  async create(createPokedexType: CreatePokedexType): Promise<PokedexType> {
    const createPokedex = Pokedex.createNew(createPokedexType.name, createPokedexType.pokedexNo);
    const pokedex = await this.pokedexRepository.save(createPokedex);
    return pokedex.toArray();
  }
  
  /**
   * ポケモンを更新する
   */
  async update(updatePokedexType: UpdatePokedexType): Promise<PokedexType> {
    const updatePokedex = await this.pokedexRepository.findOne(updatePokedexType.pokedexId);

    if (updatePokedexType.name) updatePokedex.setName(new PokemonName(updatePokedexType.name));
    if (updatePokedexType.pokedexNo) updatePokedex.setPokedexNo(new PokedexNo(updatePokedexType.pokedexNo));

    const pokedex = await this.pokedexRepository.save(updatePokedex);
    return pokedex.toArray();
  }

}
