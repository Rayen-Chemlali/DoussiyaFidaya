import { Injectable } from '@nestjs/common';
import { CreateXrayResultInput } from './dto/create-xray-result.input';
import { UpdateXrayResultInput } from './dto/update-xray-result.input';

@Injectable()
export class XrayResultsService {
  create(createXrayResultInput: CreateXrayResultInput) {
    return 'This action adds a new xrayResult';
  }

  findAll() {
    return `This action returns all xrayResults`;
  }

  findOne(id: number) {
    return `This action returns a #${id} xrayResult`;
  }

  update(id: number, updateXrayResultInput: UpdateXrayResultInput) {
    return `This action updates a #${id} xrayResult`;
  }

  remove(id: number) {
    return `This action removes a #${id} xrayResult`;
  }
}
