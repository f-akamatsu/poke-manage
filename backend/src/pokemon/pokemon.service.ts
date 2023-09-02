import { Inject, Injectable } from '@nestjs/common';
import { Pokemon } from './models/pokemon.models';
import { IPokemonRepository } from './models/pokemon.repository.interface';

@Injectable()
export class PokemonService {
  constructor(
    @Inject("REPOSITORY")
    private readonly pokemonRepository: IPokemonRepository
  ) {}

  async findAll(): Promise<Pokemon[]> {
    return this.pokemonRepository.findAll();
  }

  async findOneById(id: number): Promise<Pokemon> {
    return await this.pokemonRepository.findOne(id);
  }
}
