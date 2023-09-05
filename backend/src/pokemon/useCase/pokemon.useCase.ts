import { Inject, Injectable } from '@nestjs/common';
import { IPokemonRepository } from '../domain/repository/pokemon.repository.interface';
import { CreatePokemonType, PokemonType, UpdatePokemonType } from './type/pokemon.type';
import { Pokemon } from '../domain/entity/pokemon.entity';
import { PokemonName } from '../domain/value/pokemonName';
import { PokedexNo } from '../domain/value/pokedexNo';

@Injectable()
export class PokemonUseCase {

  constructor(
    @Inject("REPOSITORY")
    private readonly pokemonRepository: IPokemonRepository
  ) {}

  /**
   * ポケモンを全て取得する
   */
  async findAll(): Promise<PokemonType[]> {
    const pokemonList = await this.pokemonRepository.findAll();
    
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
    const pokemon = await this.pokemonRepository.findOne(id);
    return pokemon.toArray();
  }

  /**
   * ポケモンを登録する
   */
  async create(createPokemonType: CreatePokemonType): Promise<PokemonType> {
    const createPokemon = Pokemon.createNew(createPokemonType.name, createPokemonType.pokedexNo);
    const pokemon = await this.pokemonRepository.save(createPokemon);
    return pokemon.toArray();
  }
  
  /**
   * ポケモンを更新する
   */
  async update(updatePokemonType: UpdatePokemonType): Promise<PokemonType> {
    const updatePokemon = await this.pokemonRepository.findOne(updatePokemonType.id);

    if (updatePokemonType.name) updatePokemon.setName(new PokemonName(updatePokemonType.name));
    if (updatePokemonType.pokedexNo) updatePokemon.setPokedexNo(new PokedexNo(updatePokemonType.pokedexNo));

    const pokemon = await this.pokemonRepository.save(updatePokemon);
    return pokemon.toArray();
  }

}
