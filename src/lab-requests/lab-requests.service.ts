import { Injectable } from '@nestjs/common';
import { CreateLabRequestInput } from './dto/create-lab-request.input';
import { UpdateLabRequestInput } from './dto/update-lab-request.input';

@Injectable()
export class LabRequestsService {
  create(createLabRequestInput: CreateLabRequestInput) {
    return 'This action adds a new labRequest';
  }

  findAll() {
    return `This action returns all labRequests`;
  }

  findOne(id: number) {
    return `This action returns a #${id} labRequest`;
  }

  update(id: number, updateLabRequestInput: UpdateLabRequestInput) {
    return `This action updates a #${id} labRequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} labRequest`;
  }
}
