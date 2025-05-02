import { Module } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { PatientsResolver } from './patients.resolver';
import { CommonModule } from 'src/common/common.module';
import { Type } from 'class-transformer';
import { Patient } from './entities/patient.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [CommonModule,
    TypeOrmModule.forFeature([Patient]),
  ],
  providers: [PatientsResolver, PatientsService],
})
export class PatientsModule {}
