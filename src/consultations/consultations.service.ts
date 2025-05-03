import { Injectable } from '@nestjs/common';
import { GenericService } from '../common/generic.service';
import { Consultation } from './entities/consultation.entity';
import { UpdateConsultationInput } from './dto/update-consultation.input';
import { CreateConsultationInput } from './dto/create-consultation.input';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ConsultationsService extends GenericService<Consultation,
  CreateConsultationInput,
  UpdateConsultationInput> {
  constructor(@InjectRepository(Consultation) private readonly consultationRepository: Repository<Consultation>) {
    super(consultationRepository);
  }

}
