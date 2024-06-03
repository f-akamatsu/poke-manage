import { Global, Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

@Global()
export class CustomCqrsModule extends CqrsModule {}
