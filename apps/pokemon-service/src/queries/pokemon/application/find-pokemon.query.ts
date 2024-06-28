import { IQuery, IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PokemonRM } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';

export class FindPokemonQuery implements IQuery {
  constructor(public readonly pokemonId: string) {}
}

@QueryHandler(FindPokemonQuery)
export class FindPokemonQueryHandler
  implements IQueryHandler<FindPokemonQuery>
{
  constructor(private readonly prisma: PrismaService) {}

  execute(query: FindPokemonQuery): Promise<PokemonRM> {
    return this.prisma.pokemonRM.findUniqueOrThrow({
      where: {
        pokemon_id: query.pokemonId,
      },
    });
  }
}
