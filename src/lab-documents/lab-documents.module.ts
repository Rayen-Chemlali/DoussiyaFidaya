import { Module } from '@nestjs/common';
import { LabDocumentsService } from './lab-documents.service';
import { LabDocumentsResolver } from './lab-documents.resolver';

@Module({
  providers: [LabDocumentsResolver, LabDocumentsService],
})
export class LabDocumentsModule {}
