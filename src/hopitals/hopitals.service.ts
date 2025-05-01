import { Injectable } from '@nestjs/common';
import { CreateHopitalInput } from './dto/create-hopital.input';
import { UpdateHopitalInput } from './dto/update-hopital.input';

@Injectable()
export class HopitalsService {
  create(createHopitalInput: CreateHopitalInput) {
    return 'This action adds a new hopital';
  }

  findAll() {
    return `This action returns all hopitals`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hopital`;
  }

  update(id: number, updateHopitalInput: UpdateHopitalInput) {
    return `This action updates a #${id} hopital`;
  }

  remove(id: number) {
    return `This action removes a #${id} hopital`;
  }
}
