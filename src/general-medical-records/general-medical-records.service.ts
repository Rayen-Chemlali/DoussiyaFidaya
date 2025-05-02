import { Injectable } from '@nestjs/common';
import { CreateGeneralMedicalRecordInput } from './dto/create-general-medical-record.input';
import { UpdateGeneralMedicalRecordInput } from './dto/update-general-medical-record.input';
import { extend } from '@nestjs/graphql';
import { GeneralMedicalRecord } from './entities/general-medical-record.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/common/generic.service';
import { GeneralMedicalRecordsModule } from './general-medical-records.module';
import { Repository } from 'typeorm';

@Injectable()
export class GeneralMedicalRecordsService extends GenericService<GeneralMedicalRecord> {
  constructor(
    @InjectRepository(GeneralMedicalRecord)
    private readonly GeneralMedicalRecordRepo: Repository<GeneralMedicalRecord>,
  ) {
    
    super(GeneralMedicalRecordRepo);
  }
  async create(dto: CreateGeneralMedicalRecordInput): Promise<GeneralMedicalRecord> {
    const record = this.recordRepository.create(dto);
    return this.recordRepository.save(record);
  }

  async update(dto: UpdateGeneralMedicalRecordInput): Promise<GeneralMedicalRecord> {
    const record = await this.recordRepository.findOne({ where: { id: dto.id } });
    if (!record) throw new NotFoundException('Record not found');

    // Add allergies
    if (dto.addAllergies?.length) {
      const newAllergies = new Set([...(record.allergies ?? []), ...dto.addAllergies]);
      record.allergies = Array.from(newAllergies);
    }

    // Remove allergies
    if (dto.removeAllergies?.length) {
      record.allergies = (record.allergies ?? []).filter(
        (a) => !dto.removeAllergies.includes(a),
      );
    }

    return this.recordRepository.save(record);
  }
}
