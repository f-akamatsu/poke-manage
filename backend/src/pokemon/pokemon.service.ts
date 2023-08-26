import { Injectable, NotFoundException } from '@nestjs/common';
import { Pokemon } from './models/pokemon.models';

@Injectable()
export class PokemonService {
  private pokemon: Pokemon[] = [
    {id: "0001", name: "フシギダネ", pokedex_no: 1, createdAt: new Date(), updatedAt: new Date()},
    {id: "0004", name: "ヒトカゲ",   pokedex_no: 4, createdAt: new Date(), updatedAt: new Date()},
    {id: "0007", name: "ゼニガメ",   pokedex_no: 7, createdAt: new Date(), updatedAt: new Date()},
    {id: "0025", name: "ピカチュウ", pokedex_no: 25, createdAt: new Date(), updatedAt: new Date()},
  ];

  findAll(): Pokemon[] {
    return this.pokemon;
  }

  findOneById(id: string): Pokemon {
    const result = this.pokemon.find((pokemon) => id === pokemon.id);

    if (!result) throw new NotFoundException();

    return result;
  }
}
