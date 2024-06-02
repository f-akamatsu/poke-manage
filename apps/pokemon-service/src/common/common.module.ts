import { Global, Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaModule } from './prisma/prisma.module';

@Global()
@Module({
  imports: [CqrsModule, PrismaModule],
  exports: [CqrsModule, PrismaModule],
})
export class CommonModule {}
