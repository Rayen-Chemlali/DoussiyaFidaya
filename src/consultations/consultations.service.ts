import { Injectable } from '@nestjs/common';
import { GenericService } from '../common/generic.service';
import { Consultation } from './entities/consultation.entity';
import { UpdateConsultationInput } from './dto/update-consultation.input';
import { CreateConsultationInput } from './dto/create-consultation.input';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ConsultationsService extends GenericService<Consultation ,CreateConsultationInput, UpdateConsultationInput> {
    constructor(
        @InjectRepository(Consultation)
        private readonly consultationRepository: Repository<Consultation>,
    ) {
        super(consultationRepository);
    }

    async findAll(): Promise<Consultation[]> {
        return this.genericFindAll(['patient', 'doctor']);
    }

    async findOne(id: string): Promise<Consultation | null> {
        return this.genericFindOne(id, ['patient', 'doctor']);
    }

    async create(data: any): Promise<Consultation> {
        return this.genericCreate(data);
    }

    async update(id: string, data: any): Promise<Consultation | null> {
        return this.genericUpdate(id, data);
    }

    async delete(id: string): Promise<void> {
        await this.genericRemove(id);
    }


}
