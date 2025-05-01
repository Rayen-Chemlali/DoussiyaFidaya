import { Injectable } from '@nestjs/common';
import { CreateLabAttachmentInput } from './dto/create-lab-attachment.input';
import { UpdateLabAttachmentInput } from './dto/update-lab-attachment.input';

@Injectable()
export class LabAttachmentsService {
  create(createLabAttachmentInput: CreateLabAttachmentInput) {
    return 'This action adds a new labAttachment';
  }

  findAll() {
    return `This action returns all labAttachments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} labAttachment`;
  }

  update(id: number, updateLabAttachmentInput: UpdateLabAttachmentInput) {
    return `This action updates a #${id} labAttachment`;
  }

  remove(id: number) {
    return `This action removes a #${id} labAttachment`;
  }
}
