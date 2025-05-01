import { Module } from '@nestjs/common';
import { LabRequestsService } from './lab-requests.service';
import { LabRequestsResolver } from './lab-requests.resolver';

@Module({
  providers: [LabRequestsResolver, LabRequestsService],
})
export class LabRequestsModule {}
