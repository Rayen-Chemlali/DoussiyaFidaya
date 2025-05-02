import { Module } from '@nestjs/common';
import { PharmacysService } from './pharmacys.service';
import { PharmacysResolver } from './pharmacys.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pharmacy } from './entities/pharmacy.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pharmacy])],

  providers: [PharmacysResolver, PharmacysService],
})
export class PharmacysModule {}
