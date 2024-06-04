import { CommandHandler, ICommand, ICommandHandler } from '@nestjs/cqrs';

/**
 * ポケモン新規登録
 */
export class CreatePokemonCommand implements ICommand {
  constructor(
    public readonly pokedexNo: number,
    public readonly name: string,
  ) {}
}

/**
 * ポケモン新規登録ユースケース
 */
@CommandHandler(CreatePokemonCommand)
export class CreatePokemonCommandHandler implements ICommandHandler {
  async execute(command: CreatePokemonCommand): Promise<void> {
    console.log(command);
  }
}
