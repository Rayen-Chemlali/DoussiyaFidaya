// authorization.service.ts
import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Authorization } from './entities/authorization.entity';
import { Repository } from 'typeorm';
import { CreateAuthorizationInput } from './dto/create-authorization.input';
import { UpdateAuthorizationInput } from './dto/update-authorization.input';
import { GenericService } from 'src/common/generic.service';

@Injectable()
export class AuthorizationsService extends GenericService<Authorization> {
  constructor(
    @InjectRepository(Authorization)
    private readonly authRepo: Repository<Authorization>,
    ) {
    super(authRepo)
  }

  async findAll(): Promise<Authorization[]> {
    return await super.findAll(["institut_medical", "patient"]);
  }
  async findById(id: string): Promise<Authorization | null> {
    return await super.findOne(id, ["institut_medical", "patient"]);
  }

  async findByPatientId(patientId: string): Promise<Authorization[]> {
    return await super.findByField("patient.id", patientId, ["institut_medical"]);
  }

  async findByMedicalInstituteId(medicalInstituteId: string): Promise<Authorization[]> {
    return await super.findByField("institut_medical.id", medicalInstituteId, ["patient"]);
  }

  async createAuth(patientId :string ,data: CreateAuthorizationInput): Promise<Authorization> {
    const CreateData = {patientId, ...data};
    return await super.create(CreateData);
  }

  async updateAuth(id: string, data: UpdateAuthorizationInput ,userId : string): Promise<Authorization | null> {
    const state = super.checkFieldValue(id, "patient.id", userId, ["patient"]);
    if (!state) {
      throw new HttpException("You are not authorized to update this authorization.", 403);
    }
  return await super.update(id, data);
  }

  async delete(id: string ,userId : string): Promise<void> {
    const state = super.checkFieldValue(id, "patient.id", userId, ["patient"]);
    if (!state) {
      throw new HttpException("You are not authorized to update this authorization.", 403);
    }
    await super.remove(id);
  }
    
}
