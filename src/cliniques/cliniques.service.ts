import { Injectable } from '@nestjs/common';
import { CreateCliniqueInput } from './dto/create-clinique.input';
import { UpdateCliniqueInput } from './dto/update-clinique.input';

@Injectable()
export class CliniquesService {
  create(createCliniqueInput: CreateCliniqueInput) {
    return 'This action adds a new clinique';
  }

  findAll() {
    return `This action returns all cliniques`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clinique`;
  }

  update(id: number, updateCliniqueInput: UpdateCliniqueInput) {
    return `This action updates a #${id} clinique`;
  }

  remove(id: number) {
    return `This action removes a #${id} clinique`;
  }
}
