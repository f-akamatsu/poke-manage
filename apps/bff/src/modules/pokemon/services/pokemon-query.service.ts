import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  POKEMON_QUERY_PACKAGE_NAME,
  POKEMON_QUERY_SERVICE_NAME,
  PokemonQueryServiceClient,
  Pokemon as PokemonProto,
} from '@packages/protos/__generated__/pokemon/pokemon_query.interface';
import { lastValueFrom } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';

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

  async fetchAllPokemon(): Promise<Pokemon[]> {
    const response = await lastValueFrom(this.svc.fetchAllPokemon({}));
    return response.pokemonList.map(this.protoToGraphQLModel);
  }

  async findPokemon(pokemonId: string): Promise<Pokemon> {
    const response = await lastValueFrom(this.svc.findPokemon({ pokemonId }));
    return this.protoToGraphQLModel(response.pokemon);
  }

  private protoToGraphQLModel(pokemonProto: PokemonProto): Pokemon {
    return {
      pokemonId: pokemonProto.pokemonId,
      name: pokemonProto.name,
      pokedexNo: pokemonProto.pokedexNo,
      // TODO
      type1: { id: '01', name: 'ノーマル' },
    };
  }
}
