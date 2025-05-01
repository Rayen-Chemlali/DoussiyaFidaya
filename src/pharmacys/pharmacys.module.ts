import { Module } from '@nestjs/common';
import { PharmacysService } from './pharmacys.service';
import { PharmacysResolver } from './pharmacys.resolver';

@Module({
  providers: [PharmacysResolver, PharmacysService],
})
export class PharmacysModule {}
