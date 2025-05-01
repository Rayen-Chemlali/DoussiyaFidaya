import { Module } from '@nestjs/common';
import { LaboratorysService } from './laboratorys.service';
import { LaboratorysResolver } from './laboratorys.resolver';

@Module({
  providers: [LaboratorysResolver, LaboratorysService],
})
export class LaboratorysModule {}
