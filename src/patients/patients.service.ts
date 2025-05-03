import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Patient } from './entities/patient.entity';
import { Repository } from 'typeorm';
import { GenericService } from 'src/common/generic.service';
import { CreatePatientInput } from './dto/create-patient.input';
import { UpdatePatientInput } from './dto/update-patient.input';

@Injectable()
export class PatientsService extends GenericService<Patient , any , any> {
  constructor(
    @InjectRepository(Patient)
    private readonly patientRepository: Repository<Patient>,
  ) {
    super(patientRepository);
  }

  async createPatient(input: CreatePatientInput): Promise<Patient> {
    return this.genericCreate(input);
  }

  async updatePatient(id: string, input: UpdatePatientInput): Promise<Patient | null> {
    return this.genericUpdate(id, input);
  }

  async findAll(): Promise<Patient[]> {
    return this.genericFindAll(['user', 'general_medical_record']);
  }

  async findOneById(id: string): Promise<Patient> {
    const patient = await this.genericFindOne(id, ['user', 'general_medical_record']);
    if (!patient) {
      throw new NotFoundException(`Patient with id ${id} not found`);
    }
    return patient;
  }

  async findByUserId(userId: string): Promise<Patient> {
    return (await this.genericFindByField('user.id', userId, ['user', 'general_medical_record']))?.getOne() as Promise<Patient>;
  }

  async deletePatient(id: string): Promise<void> {
    const exists = await this.genericFindOne(id);
    if (!exists) {
      throw new NotFoundException(`Patient with id ${id} not found`);
    }
    await this.genericRemove(id);
  }
}
