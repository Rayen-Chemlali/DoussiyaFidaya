// authorization.service.ts
import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Authorization } from './entities/authorization.entity';
import { Repository } from 'typeorm';
import { CreateAuthorizationInput } from './dto/create-authorization.input';
import { UpdateAuthorizationInput } from './dto/update-authorization.input';
import { GenericService } from 'src/common/generic.service';

@Injectable()
export class AuthorizationsService extends GenericService<Authorization ,any, any> {
  constructor(
    @InjectRepository(Authorization)
    private readonly authRepo: Repository<Authorization>,
    ) {
    super(authRepo)
  }

  async findAll(): Promise<Authorization[]> {
    return await super.genericFindAll(["institut_medical", "patient"]);
  }
  async findById(id: string): Promise<Authorization | null> {
    return await super.genericFindOne(id, ["institut_medical", "patient"]);
  }

  async findByPatientId(patientId: string): Promise<Authorization[]> {
    return (await super.genericFindByField("patient.id", patientId, ["patient","institut_medical"])).getMany();
  }

  async findByMedicalInstituteId(medicalInstituteId: string): Promise<Authorization[]> {
    return (await super.genericFindByField("institut_medical.id", medicalInstituteId, ["institut_medical","patient"])).getMany();
  }

  async create(patientId :string ,data: CreateAuthorizationInput): Promise<Authorization> {
    const CreateData = {patientId, ...data};
    return await super.genericCreate(CreateData);
  }

  async update(id: string, data: UpdateAuthorizationInput ,userId : string): Promise<Authorization | null> {
    const state = super.genericCheckFieldValue(id, "patient.id", userId, ["patient"]);
    if (!state) {
      throw new HttpException("You are not authorized to update this authorization.", 403);
    }
  return await super.genericUpdate(id, data);
  }

  async delete(id: string ,userId : string): Promise<void> {
    const state = super.genericCheckFieldValue(id, "patient.id", userId, ["patient"]);
    if (!state) {
      throw new HttpException("You are not authorized to update this authorization.", 403);
    }
    await super.genericRemove(id);
  }
    
}
