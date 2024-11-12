import {
  BadRequestException,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ValidateGraphQLMiddleware implements NestMiddleware {
  private static readonly ALLOWED_KEYS = [
    'operationName',
    'query',
    'variables',
  ];

  use(req: Request, _res: Response, next: NextFunction) {
    const keys = Object.keys(req.body);
    const invalidKeys = keys.filter(
      (key) => !ValidateGraphQLMiddleware.ALLOWED_KEYS.includes(key),
    );
    if (invalidKeys.length) {
      throw new BadRequestException(
        `Invalid parameters in request: ${invalidKeys.join(',')}`,
      );
    }

    next();
  }
}
