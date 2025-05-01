import { Module } from '@nestjs/common';
import { GeneralMedicalRecordsService } from './general-medical-records.service';
import { GeneralMedicalRecordsResolver } from './general-medical-records.resolver';

@Module({
  providers: [GeneralMedicalRecordsResolver, GeneralMedicalRecordsService],
})
export class GeneralMedicalRecordsModule {}
