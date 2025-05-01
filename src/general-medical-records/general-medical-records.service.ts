import { Injectable } from '@nestjs/common';
import { CreateGeneralMedicalRecordInput } from './dto/create-general-medical-record.input';
import { UpdateGeneralMedicalRecordInput } from './dto/update-general-medical-record.input';

@Injectable()
export class GeneralMedicalRecordsService {
  create(createGeneralMedicalRecordInput: CreateGeneralMedicalRecordInput) {
    return 'This action adds a new generalMedicalRecord';
  }

  findAll() {
    return `This action returns all generalMedicalRecords`;
  }

  findOne(id: number) {
    return `This action returns a #${id} generalMedicalRecord`;
  }

  update(id: number, updateGeneralMedicalRecordInput: UpdateGeneralMedicalRecordInput) {
    return `This action updates a #${id} generalMedicalRecord`;
  }

  remove(id: number) {
    return `This action removes a #${id} generalMedicalRecord`;
  }
}
