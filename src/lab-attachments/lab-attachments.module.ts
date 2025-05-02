import { Module } from '@nestjs/common';
import { LabAttachmentsService } from './lab-attachments.service';
import { LabAttachmentsResolver } from './lab-attachments.resolver';
import { LabAttachment } from './entities/lab-attachment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LabAttachment])],

  providers: [LabAttachmentsResolver, LabAttachmentsService],
})
export class LabAttachmentsModule {}
