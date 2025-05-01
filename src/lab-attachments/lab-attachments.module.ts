import { Module } from '@nestjs/common';
import { LabAttachmentsService } from './lab-attachments.service';
import { LabAttachmentsResolver } from './lab-attachments.resolver';

@Module({
  providers: [LabAttachmentsResolver, LabAttachmentsService],
})
export class LabAttachmentsModule {}
