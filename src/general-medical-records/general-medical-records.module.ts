import { Module } from '@nestjs/common';
import { GeneralMedicalRecordsService } from './general-medical-records.service';
import { GeneralMedicalRecordsResolver } from './general-medical-records.resolver';
import { GeneralMedicalRecordsController } from './general-medical-record.controller';
import { CommonModule } from 'src/common/common.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GeneralMedicalRecord } from './entities/general-medical-record.entity';

@Module({
  imports: [CommonModule,
    TypeOrmModule.forFeature([GeneralMedicalRecord])
  ],
  providers: [GeneralMedicalRecordsResolver, GeneralMedicalRecordsService],
  controllers: [GeneralMedicalRecordsController],
})
export class GeneralMedicalRecordsModule {}
