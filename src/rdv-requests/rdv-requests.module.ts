import { Module } from '@nestjs/common';
import { RdvRequestsService } from './rdv-requests.service';
import { RdvRequestsResolver } from './rdv-requests.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RdvRequest } from './entities/rdv-request.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RdvRequest])],
  providers: [RdvRequestsResolver, RdvRequestsService],
})
export class RdvRequestsModule {}
