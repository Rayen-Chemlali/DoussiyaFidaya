import { Injectable } from '@nestjs/common';
import { CreateRdvRequestInput } from './dto/create-rdv-request.input';
import { UpdateRdvRequestInput } from './dto/update-rdv-request.input';

@Injectable()
export class RdvRequestsService {
  create(createRdvRequestInput: CreateRdvRequestInput) {
    return 'This action adds a new rdvRequest';
  }

  findAll() {
    return `This action returns all rdvRequests`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rdvRequest`;
  }

  update(id: number, updateRdvRequestInput: UpdateRdvRequestInput) {
    return `This action updates a #${id} rdvRequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} rdvRequest`;
  }
}
