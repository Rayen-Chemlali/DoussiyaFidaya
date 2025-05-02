import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GeneralMedicalRecord } from './entities/general-medical-record.entity';
import { CreateGeneralMedicalRecordInput } from './dto/create-general-medical-record.input';
import { UpdateGeneralMedicalRecordInput } from './dto/update-general-medical-record.input';
import { GenericService } from 'src/common/generic.service'; // Adjust path as needed

@Injectable()
export class GeneralMedicalRecordsService extends GenericService<GeneralMedicalRecord> {
  constructor(
    @InjectRepository(GeneralMedicalRecord)
    private readonly medicalRecordRepository: Repository<GeneralMedicalRecord>,
  ) {
    super(medicalRecordRepository);
  }

  async findAll(): Promise<GeneralMedicalRecord[]> {
    return this.genericFindAll(['patient']);
  }

  async findOne(id: string): Promise<GeneralMedicalRecord | null> {
    const record = await this.genericFindOne(id, ['patient']);
    if (!record) {
      throw new NotFoundException(`GeneralMedicalRecord with id ${id} not found`);
    }
    return record;
  }

  // Find by patient.id (assuming there’s a relation named `patient`)
  async findByPatientId(patientId: string): Promise<GeneralMedicalRecord[]> {
    return this.genericFindByField('patient.id', patientId, ['patient']);
  }

  async create(
    dto: CreateGeneralMedicalRecordInput,
  ): Promise<GeneralMedicalRecord> {
    return this.genericCreate(dto);
  }

  async updateGeneralMedicalRecord(
    id: string,
    dto: UpdateGeneralMedicalRecordInput,
  ): Promise<GeneralMedicalRecord | null> {
  const record = await this.genericFindOne(id);
    if (!record) {
      throw new NotFoundException(`GeneralMedicalRecord with id ${id} not found`);
    }
  
    // Start with current allergies
    let updatedAllergies = record.allergies ?? [];
  
    if (dto.addAllergies?.length) {
      const current = new Set(updatedAllergies);
      dto.addAllergies.forEach((a) => current.add(a));
      updatedAllergies = Array.from(current);
    }
  
    if (dto.removeAllergies?.length) {
      updatedAllergies = updatedAllergies.filter(
        (a) => !(dto.removeAllergies?.includes(a)),
      );
    }
  
    // Destructure to remove the transient fields
    const { addAllergies, removeAllergies, ...entityFields } = dto;
  
    // Final payload with only valid entity fields
    const updatePayload = {
      ...entityFields,
      allergies: updatedAllergies,
    };
  
    return this.genericUpdate(id, updatePayload);
  }
  
  // Delete a medical record by ID
  async delete(id: string , userId): Promise<void> {
    const state = super.genericCheckFieldValue(id, "patient.id", userId, ["patient"]);
        if (!state) {
          throw new HttpException("You are not authorized to update this authorization.", 403);
        }
    await this.genericRemove(id);
  }
}
