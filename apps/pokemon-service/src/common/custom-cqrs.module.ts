import { Global } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

@Global()
export class CustomCqrsModule extends CqrsModule {}
