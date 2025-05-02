import { Module } from '@nestjs/common';
import { LabDocumentsService } from './lab-documents.service';
import { LabDocumentsResolver } from './lab-documents.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LabDocument } from './entities/lab-document.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LabDocument])],

  providers: [LabDocumentsResolver, LabDocumentsService],
})
export class LabDocumentsModule {}
