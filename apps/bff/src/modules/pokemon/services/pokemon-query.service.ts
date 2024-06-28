import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  POKEMON_QUERY_PACKAGE_NAME,
  POKEMON_QUERY_SERVICE_NAME,
  PokemonQueryServiceClient,
} from '@packages/protos/__generated__/pokemon/pokemon_query.interface';
import { lastValueFrom } from 'rxjs';
import { PokemonBase } from '../types/pokemon.type';

@Injectable()
export class PokemonQueryService implements OnModuleInit {
  private svc: PokemonQueryServiceClient;

  constructor(
    @Inject(POKEMON_QUERY_PACKAGE_NAME) private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.svc = this.client.getService<PokemonQueryServiceClient>(
      POKEMON_QUERY_SERVICE_NAME,
    );
  }

  async fetchAllPokemon(): Promise<PokemonBase[]> {
    const response = await lastValueFrom(this.svc.fetchAllPokemon({}));
    return response.pokemonList;
  }

  async findPokemon(pokemonId: string): Promise<PokemonBase> {
    const response = await lastValueFrom(this.svc.findPokemon({ pokemonId }));
    return response.pokemon;
  }
}
