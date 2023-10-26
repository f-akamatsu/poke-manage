import { doSeedMove } from "./move.seed";
import { doSeedPokedex } from "./pokedex.seed";

const main = async () => {
  console.log('💫 seed executing ...');

  await doSeedPokedex();
  await doSeedMove();

  console.log('💫 seed finished.');
};

main();