import { Inject, Injectable } from '@nestjs/common';
import { IPokedexRepository } from './pokedex.repository.interface';
import { CreatePokemonType, PokemonType, UpdatePokemonType } from './type/pokemon.type';
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
  async findAll(): Promise<PokemonType[]> {
    const pokemonList = await this.pokedexRepository.findAll();
    console.log(pokemonList);
    
    const array = [];
    for (const pokemon of pokemonList) {
      array.push(pokemon.toArray());
    }

    return array;
  }

  /**
   * IDでポケモンを取得する
   */
  async findOneById(id: string): Promise<PokemonType> {
    const pokemon = await this.pokedexRepository.findOne(id);
    return pokemon.toArray();
  }

  /**
   * ポケモンを登録する
   */
  async create(createPokemonType: CreatePokemonType): Promise<PokemonType> {
    const createPokemon = Pokedex.createNew(createPokemonType.name, createPokemonType.pokedexNo);
    const pokemon = await this.pokedexRepository.save(createPokemon);
    return pokemon.toArray();
  }
  
  /**
   * ポケモンを更新する
   */
  async update(updatePokemonType: UpdatePokemonType): Promise<PokemonType> {
    const updatePokemon = await this.pokedexRepository.findOne(updatePokemonType.pokedexId);

    if (updatePokemonType.name) updatePokemon.setName(new PokemonName(updatePokemonType.name));
    if (updatePokemonType.pokedexNo) updatePokemon.setPokedexNo(new PokedexNo(updatePokemonType.pokedexNo));

    const pokemon = await this.pokedexRepository.save(updatePokemon);
    return pokemon.toArray();
  }

}
