import { Module } from '@nestjs/common';
import { MedicationsService } from './medications.service';
import { MedicationsResolver } from './medications.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medication } from './entities/medication.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Medication])],

  providers: [MedicationsResolver, MedicationsService],
})
export class MedicationsModule {}
