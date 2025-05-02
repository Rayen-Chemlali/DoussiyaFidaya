import { Module } from '@nestjs/common';
import { HopitalsService } from './hopitals.service';
import { HopitalsResolver } from './hopitals.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hopital } from './entities/hopital.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hopital])],

  providers: [HopitalsResolver, HopitalsService],
})
export class HopitalsModule {}
