import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { PokemonRM } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Optional } from 'typescript-optional';
import { Pokemon } from '../../domain/entities/pokemon';
import { PokemonId } from '../../domain/value-objects/pokemon-id';

@Injectable()
export class PokemonEventHandler {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * { async: true, promisify: true }
   * 同期的にリードモデルを更新するため
   * 本来は非同期の方がよい？ ⇒ 結局要件による
   */
  @OnEvent('pokemon.*', { async: true, promisify: true })
  async handlePokemonEvent(pokemon: Pokemon): Promise<void> {
    if (pokemon.isDeleted.value) {
      await this.delete(pokemon.pokemonId);
    } else {
      await this.upsert(pokemon);
    }
  }

  /**
   *
   */
  private async upsert(pokemon: Pokemon): Promise<void> {
    const pokemonRM: PokemonRM = {
      pokemon_id: pokemon.pokemonId.value,
      name: pokemon.name.value,
      pokedex_no: pokemon.pokedexNo.value,
      type_id_1: pokemon.type1.id,
      type_id_2: Optional.ofNullable(pokemon.type2?.id).orNull(),
      hit_points: pokemon.baseStats.hitPoints.value,
      attack: pokemon.baseStats.attack.value,
      defense: pokemon.baseStats.defense.value,
      sp_attack: pokemon.baseStats.spAttack.value,
      sp_defense: pokemon.baseStats.spDefense.value,
      speed: pokemon.baseStats.speed.value,
    };

    await this.prisma.pokemonRM.upsert({
      where: {
        pokemon_id: pokemon.pokemonId.value,
      },
      create: pokemonRM,
      update: pokemonRM,
    });
  }

  private async delete(pokemonId: PokemonId): Promise<void> {
    await this.prisma.pokemonRM.delete({
      where: {
        pokemon_id: pokemonId.value,
      },
    });
  }
}
