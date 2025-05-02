import { Module } from '@nestjs/common';
import { GeneralMedicalRecordsService } from './general-medical-records.service';
import { GeneralMedicalRecordsResolver } from './general-medical-records.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GeneralMedicalRecord } from './entities/general-medical-record.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GeneralMedicalRecord])],

  providers: [GeneralMedicalRecordsResolver, GeneralMedicalRecordsService],
})
export class GeneralMedicalRecordsModule {}
