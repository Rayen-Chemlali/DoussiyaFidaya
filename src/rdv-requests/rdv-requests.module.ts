import { Module } from '@nestjs/common';
import { RdvRequestsService } from './rdv-requests.service';
import { RdvRequestsResolver } from './rdv-requests.resolver';

@Module({
  providers: [RdvRequestsResolver, RdvRequestsService],
})
export class RdvRequestsModule {}
