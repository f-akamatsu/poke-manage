import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Pokemon } from '../../domain/entities/pokemon';
import { PokemonRM } from '@prisma/client';

@Injectable()
export class PokemonEventHandler {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * { async: true, promisify: true }
   * 同期的にリードモデルを更新するため
   * 本来は非同期の方がよい？
   */
  @OnEvent('pokemon.*', { async: true, promisify: true })
  async handlePokemonEvent(pokemon: Pokemon): Promise<void> {
    await this.upsert(pokemon);
  }

  /**
   *
   */
  private async upsert(pokemon: Pokemon): Promise<void> {
    const pokemonRM: PokemonRM = {
      pokemon_id: pokemon.pokemonId.value,
      name: pokemon.name.value,
      pokedex_no: pokemon.pokedexNo.value,
    };

    await this.prisma.pokemonRM.upsert({
      where: {
        pokemon_id: pokemon.pokemonId.value,
      },
      create: pokemonRM,
      update: pokemonRM,
    });
  }
}
