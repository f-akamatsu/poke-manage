import { Inject, Injectable } from '@nestjs/common';
import { IPokemonRepository } from '../domain/repository/pokemon.repository.interface';
import { PokemonType } from './type/pokemon.type';

@Injectable()
export class PokemonUseCase {

  constructor(
    @Inject("REPOSITORY")
    private readonly pokemonRepository: IPokemonRepository
  ) {}

  async findAll(): Promise<PokemonType[]> {
    const pokemonList = await this.pokemonRepository.findAll();
    
    const array = [];
    for (const pokemon of pokemonList) {
      array.push(pokemon.toArray());
    }

    return array;
  }

  async findOneById(id: string): Promise<PokemonType> {
    const pokemon = await this.pokemonRepository.findOne(id);
    return pokemon.toArray();
  }
  
}
