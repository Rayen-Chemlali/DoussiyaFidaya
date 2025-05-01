import { Injectable } from '@nestjs/common';
import { CreateInstitutMedicalInput } from './dto/create-institut-medical.input';
import { UpdateInstitutMedicalInput } from './dto/update-institut-medical.input';

@Injectable()
export class InstitutMedicalsService {
  create(createInstitutMedicalInput: CreateInstitutMedicalInput) {
    return 'This action adds a new institutMedical';
  }

  findAll() {
    return `This action returns all institutMedicals`;
  }

  findOne(id: number) {
    return `This action returns a #${id} institutMedical`;
  }

  update(id: number, updateInstitutMedicalInput: UpdateInstitutMedicalInput) {
    return `This action updates a #${id} institutMedical`;
  }

  remove(id: number) {
    return `This action removes a #${id} institutMedical`;
  }
}
