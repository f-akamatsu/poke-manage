/**
 * 不正な引数エラー
 */
export class IllegalArgumentError extends Error {

  constructor(message: string) {
    super(message);
  }

}