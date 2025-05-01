import { Module } from '@nestjs/common';
import { HopitalsService } from './hopitals.service';
import { HopitalsResolver } from './hopitals.resolver';

@Module({
  providers: [HopitalsResolver, HopitalsService],
})
export class HopitalsModule {}
