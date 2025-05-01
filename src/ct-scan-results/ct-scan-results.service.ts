import { Injectable } from '@nestjs/common';
import { CreateCtScanResultInput } from './dto/create-ct-scan-result.input';
import { UpdateCtScanResultInput } from './dto/update-ct-scan-result.input';

@Injectable()
export class CtScanResultsService {
  create(createCtScanResultInput: CreateCtScanResultInput) {
    return 'This action adds a new ctScanResult';
  }

  findAll() {
    return `This action returns all ctScanResults`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ctScanResult`;
  }

  update(id: number, updateCtScanResultInput: UpdateCtScanResultInput) {
    return `This action updates a #${id} ctScanResult`;
  }

  remove(id: number) {
    return `This action removes a #${id} ctScanResult`;
  }
}
