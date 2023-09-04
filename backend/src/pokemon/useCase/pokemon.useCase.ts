import { Inject, Injectable } from '@nestjs/common';
import { IPokemonRepository } from '../domain/repository/pokemon.repository.interface';
import { CreatePokemonType, PokemonType } from './type/pokemon.type';
import { Pokemon } from '../domain/entity/pokemon.entity';
import { UpdatePokemonInput } from '../presenter/dto/updatePokemon.input';

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

  async create(createPokemonType: CreatePokemonType): Promise<PokemonType> {
    const createPokemon = Pokemon.createNew(createPokemonType.name, createPokemonType.pokedexNo);
    const pokemon = await this.pokemonRepository.save(createPokemon);
    return pokemon.toArray();
  }
  
  // async update(updatePokemonType: PokemonType): Promise<PokemonType> {
  //   const updatePokemon = Pokemon.create(updatePokemonType.id, updatePokemonType.name, updatePokemonType.pokedexNo);
  //   const pokemon = await this.pokemonRepository.save(updatePokemon);
  //   return pokemon.toArray();
  // }

}
