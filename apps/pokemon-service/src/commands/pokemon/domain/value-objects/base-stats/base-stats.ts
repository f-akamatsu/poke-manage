import { BaseStatsAttack } from './base-stats-attack';
import { BaseStatsDefense } from './base-stats-defense';
import { BaseStatsHitPoints } from './base-stats-hit-points';
import { BaseStatsSpAttack } from './base-stats-sp-attack';
import { BaseStatsSpDefense } from './base-stats-sp-defense';
import { BaseStatsSpeed } from './base-stats-speed';

/**
 * 種族値
 */
export class BaseStats {
  private constructor(
    readonly hitPoints: BaseStatsHitPoints,
    readonly attack: BaseStatsAttack,
    readonly defense: BaseStatsDefense,
    readonly spAttack: BaseStatsSpAttack,
    readonly spDefense: BaseStatsSpDefense,
    readonly speed: BaseStatsSpeed,
  ) {}

  public static from(
    hitPoints: number,
    attack: number,
    defense: number,
    spAttack: number,
    spDefense: number,
    speed: number,
  ): BaseStats {
    return new BaseStats(
      BaseStatsHitPoints.from(hitPoints),
      BaseStatsAttack.from(attack),
      BaseStatsDefense.from(defense),
      BaseStatsSpAttack.from(spAttack),
      BaseStatsSpDefense.from(spDefense),
      BaseStatsSpeed.from(speed),
    );
  }

  public static createEmpty(): BaseStats {
    return new BaseStats(
      BaseStatsHitPoints.from(0),
      BaseStatsAttack.from(0),
      BaseStatsDefense.from(0),
      BaseStatsSpAttack.from(0),
      BaseStatsSpDefense.from(0),
      BaseStatsSpeed.from(0),
    );
  }
}
