import { Injectable } from '@nestjs/common';
import { CreateLabDocumentInput } from './dto/create-lab-document.input';
import { UpdateLabDocumentInput } from './dto/update-lab-document.input';

@Injectable()
export class LabDocumentsService {
  create(createLabDocumentInput: CreateLabDocumentInput) {
    return 'This action adds a new labDocument';
  }

  findAll() {
    return `This action returns all labDocuments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} labDocument`;
  }

  update(id: number, updateLabDocumentInput: UpdateLabDocumentInput) {
    return `This action updates a #${id} labDocument`;
  }

  remove(id: number) {
    return `This action removes a #${id} labDocument`;
  }
}
