import { Module } from '@nestjs/common';
import { CtScanResultsService } from './ct-scan-results.service';
import { CtScanResultsResolver } from './ct-scan-results.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CTScanResult } from './entities/ct-scan-result.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CTScanResult])],

  providers: [CtScanResultsResolver, CtScanResultsService],
})
export class CtScanResultsModule {}
