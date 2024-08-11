import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  POKEMON_COMMAND_PACKAGE_NAME,
  POKEMON_COMMAND_SERVICE_NAME,
  PokemonCommandServiceClient,
} from '@packages/protos/__generated__/pokemon/pokemon_command.interface';
import { lastValueFrom } from 'rxjs';
import { CreatePokemonInput } from '../inputs/create-pokemon.input';
import { UpdatePokemonNameInput } from '../inputs/update-pokemon-name.input';
import { DeletePokemonInput } from '../inputs/delete-pokemon.input';

@Injectable()
export class PokemonCommandService implements OnModuleInit {
  private svc: PokemonCommandServiceClient;

  constructor(
    @Inject(POKEMON_COMMAND_PACKAGE_NAME) private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.svc = this.client.getService<PokemonCommandServiceClient>(
      POKEMON_COMMAND_SERVICE_NAME,
    );
  }

  /**
   * ポケモンを新規登録する
   */
  async createPokemon(
    input: CreatePokemonInput,
  ): Promise<{ pokemonId: string }> {
    const response = await lastValueFrom(this.svc.createPokemon(input));
    return response;
  }

  /**
   * ポケモンの名前を変更する
   */
  async updatePokemonName(input: UpdatePokemonNameInput): Promise<void> {
    await lastValueFrom(this.svc.updatePokemonName(input));
  }

  /**
   * ポケモンを削除する
   */
  async deletePokemon(input: DeletePokemonInput): Promise<void> {
    await lastValueFrom(this.svc.deletePokemon(input));
  }
}
