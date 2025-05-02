import { Module } from '@nestjs/common';
import { LabRequestsService } from './lab-requests.service';
import { LabRequestsResolver } from './lab-requests.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LabRequest } from './entities/lab-request.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LabRequest])],

  providers: [LabRequestsResolver, LabRequestsService],
})
export class LabRequestsModule {}
