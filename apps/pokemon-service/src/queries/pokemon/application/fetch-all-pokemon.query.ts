import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PokemonRM } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';

export class FetchAllPokemonQuery {}

@QueryHandler(FetchAllPokemonQuery)
export class FetchAllPokemonQueryHandler
  implements IQueryHandler<FetchAllPokemonQuery>
{
  constructor(private readonly prisma: PrismaService) {}

  execute(query: FetchAllPokemonQuery): Promise<PokemonRM[]> {
    return this.prisma.pokemonRM.findMany();
  }
}
