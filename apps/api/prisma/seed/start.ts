import { doSeedMoveByLevelUp } from "./move-by-level-up.seed";
import { doSeedMove } from "./move.seed";
import { doSeedPokedex } from "./pokedex.seed";

const main = async () => {
  console.log('💫 seed executing ...');

  // Pokedex
  await doSeedPokedex();
  await doSeedMoveByLevelUp();
  
  // Move
  await doSeedMove();
  

  console.log('💫 seed finished.');
};

main();