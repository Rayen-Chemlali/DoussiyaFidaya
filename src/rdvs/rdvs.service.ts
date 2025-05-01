import { Injectable } from '@nestjs/common';
import { CreateRdvInput } from './dto/create-rdv.input';
import { UpdateRdvInput } from './dto/update-rdv.input';

@Injectable()
export class RdvsService {
  create(createRdvInput: CreateRdvInput) {
    return 'This action adds a new rdv';
  }

  findAll() {
    return `This action returns all rdvs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rdv`;
  }

  update(id: number, updateRdvInput: UpdateRdvInput) {
    return `This action updates a #${id} rdv`;
  }

  remove(id: number) {
    return `This action removes a #${id} rdv`;
  }
}
