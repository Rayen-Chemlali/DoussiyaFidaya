import { Module } from '@nestjs/common';
import { RdvsService } from './rdvs.service';
import { RdvsResolver } from './rdvs.resolver';

@Module({
  providers: [RdvsResolver, RdvsService],
})
export class RdvsModule {}
