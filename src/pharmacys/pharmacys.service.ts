import { Injectable } from '@nestjs/common';
import { CreatePharmacyInput } from './dto/create-pharmacy.input';
import { UpdatePharmacyInput } from './dto/update-pharmacy.input';

@Injectable()
export class PharmacysService {
  create(createPharmacyInput: CreatePharmacyInput) {
    return 'This action adds a new pharmacy';
  }

  findAll() {
    return `This action returns all pharmacys`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pharmacy`;
  }

  update(id: number, updatePharmacyInput: UpdatePharmacyInput) {
    return `This action updates a #${id} pharmacy`;
  }

  remove(id: number) {
    return `This action removes a #${id} pharmacy`;
  }
}
