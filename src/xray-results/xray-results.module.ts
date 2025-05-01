import { Module } from '@nestjs/common';
import { XrayResultsService } from './xray-results.service';
import { XrayResultsResolver } from './xray-results.resolver';

@Module({
  providers: [XrayResultsResolver, XrayResultsService],
})
export class XrayResultsModule {}
