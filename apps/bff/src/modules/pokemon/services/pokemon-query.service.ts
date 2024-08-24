import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  POKEMON_QUERY_PACKAGE_NAME,
  POKEMON_QUERY_SERVICE_NAME,
  Pokemon as PokemonProto,
  PokemonQueryServiceClient,
} from '@packages/protos/__generated__/pokemon/pokemon_query.interface';
import { lastValueFrom } from 'rxjs';
import { Optional } from 'typescript-optional';
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

  /**
   * 全ポケモンを取得する
   */
  async fetchAllPokemon(): Promise<Pokemon[]> {
    const response = await lastValueFrom(this.svc.fetchAllPokemon({}));

    // 取得結果が0件のときProtoはundefinedを返却するため、Optionalで空配列に変換しておく
    return Optional.ofNullable(response.pokemonList)
      .orElse([])
      .map(this.protoToGraphQLModel);
  }

  /**
   * ポケモンを1件取得する
   */
  async findPokemon(pokemonId: string): Promise<Pokemon> {
    const response = await lastValueFrom(this.svc.findPokemon({ pokemonId }));
    return this.protoToGraphQLModel(
      Optional.ofNullable(response.pokemon).get(), // protoのmessageがundefinedになる
    );
  }

  private protoToGraphQLModel(pokemonProto: PokemonProto): Pokemon {
    return {
      pokemonId: pokemonProto.pokemonId,
      name: pokemonProto.name,
      pokedexNo: pokemonProto.pokedexNo,
      typeId1: pokemonProto.typeId1,
      typeId2: pokemonProto.typeId2,
      hitPoints: pokemonProto.hitPoints,
      attack: pokemonProto.attack,
      defense: pokemonProto.defense,
      spAttack: pokemonProto.spAttack,
      spDefense: pokemonProto.spDefense,
      speed: pokemonProto.speed,
    };
  }
}
