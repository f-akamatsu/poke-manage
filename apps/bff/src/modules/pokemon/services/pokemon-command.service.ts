import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  POKEMON_COMMAND_PACKAGE_NAME,
  POKEMON_COMMAND_SERVICE_NAME,
  PokemonCommandServiceClient,
} from '@packages/protos/__generated__/pokemon/pokemon_command.interface';
import { lastValueFrom } from 'rxjs';
import { CreatePokemonInput } from '../inputs/create-pokemon.input';
import { UpdatePokemonInput } from '../inputs/update-pokemon.input';
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

  async createPokemon(
    input: CreatePokemonInput,
  ): Promise<{ pokemonId: string }> {
    const response = await lastValueFrom(this.svc.createPokemon(input));
    return response;
  }

  async updatePokemon(input: UpdatePokemonInput): Promise<void> {
    await lastValueFrom(this.svc.updatePokemon(input));
  }
}
