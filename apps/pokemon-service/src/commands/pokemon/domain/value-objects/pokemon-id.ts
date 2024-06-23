import { ObjectId } from 'mongodb';

export class PokemonId {
  private constructor(public readonly value: string) {}

  public static generate(): PokemonId {
    return new PokemonId(new ObjectId().toString()); // TODO mongodbに依存している
  }

  public static from(value: string): PokemonId {
    return new PokemonId(value);
  }
}
