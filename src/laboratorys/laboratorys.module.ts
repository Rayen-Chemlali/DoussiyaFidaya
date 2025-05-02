import { Module } from '@nestjs/common';
import { LaboratorysService } from './laboratorys.service';
import { LaboratorysResolver } from './laboratorys.resolver';
import { Laboratory } from './entities/laboratory.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Laboratory])],
  providers: [LaboratorysResolver, LaboratorysService],
})
export class LaboratorysModule {}
