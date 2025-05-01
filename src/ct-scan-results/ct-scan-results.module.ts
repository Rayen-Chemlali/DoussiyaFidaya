import { Module } from '@nestjs/common';
import { CtScanResultsService } from './ct-scan-results.service';
import { CtScanResultsResolver } from './ct-scan-results.resolver';

@Module({
  providers: [CtScanResultsResolver, CtScanResultsService],
})
export class CtScanResultsModule {}
