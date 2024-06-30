import { Inject, Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import {
  IPokemonRepository,
  POKEMON_REPOSITORY_TOKEN,
} from '../../domain/repository/pokemon.repository.interface';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Pokemon } from '../../domain/entities/pokemon';
import { PokemonRM } from '@prisma/client';
import { PokemonId } from '../../domain/value-objects/pokemon-id';

@Injectable()
export class PokemonEventHandler {
  constructor(
    @Inject(POKEMON_REPOSITORY_TOKEN)
    private readonly pokemonRepository: IPokemonRepository,
    private readonly prisma: PrismaService,
  ) {}

  /**
   * { async: true, promisify: true }
   * 同期的にリードモデルを更新するため
   * 本来は非同期の方がよい？
   */
  @OnEvent('pokemon.*', { async: true, promisify: true })
  async handlePokemonEvent(payload: { pokemonId: string }): Promise<void> {
    const pokemonId = PokemonId.from(payload.pokemonId);
    const pokemon = await this.pokemonRepository.findById(pokemonId);

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
