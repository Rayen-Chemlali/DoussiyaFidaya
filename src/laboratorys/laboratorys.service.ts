import { Injectable } from '@nestjs/common';
import { CreateLaboratoryInput } from './dto/create-laboratory.input';
import { UpdateLaboratoryInput } from './dto/update-laboratory.input';

@Injectable()
export class LaboratorysService {
  create(createLaboratoryInput: CreateLaboratoryInput) {
    return 'This action adds a new laboratory';
  }

  findAll() {
    return `This action returns all laboratorys`;
  }

  findOne(id: number) {
    return `This action returns a #${id} laboratory`;
  }

  update(id: number, updateLaboratoryInput: UpdateLaboratoryInput) {
    return `This action updates a #${id} laboratory`;
  }

  remove(id: number) {
    return `This action removes a #${id} laboratory`;
  }
}
