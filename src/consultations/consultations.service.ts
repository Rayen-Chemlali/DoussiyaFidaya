import { Injectable } from '@nestjs/common';
import { GenericService } from '../common/generic.service';
import { Consultation } from './entities/consultation.entity';

@Injectable()
export class ConsultationsService extends GenericService<Consultation> {

}
