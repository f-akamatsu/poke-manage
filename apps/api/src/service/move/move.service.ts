import { Injectable } from '@nestjs/common';
import { MoveType } from './type/move.type';

const moveList: MoveType[] = [
  { moveId: '1', name: 'にらみつける' },
  { moveId: '2', name: 'しっぽをふる' },
  { moveId: '3', name: 'なきごえ' },
  { moveId: '4', name: 'たいあたり' },
  { moveId: '5', name: 'ひっかく' },
];

@Injectable()
export class MoveService {
  constructor() {}

  async findOneById(moveId: string): Promise<MoveType> {
    return moveList.find((move) => move.moveId === moveId);
  }
}
