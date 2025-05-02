import { Injectable } from '@nestjs/common';
import { GenericService } from '../common/generic.service';
import { Consultation } from './entities/consultation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ConsultationsService extends GenericService<Consultation ,any , any> {
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
