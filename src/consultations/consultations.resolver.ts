import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ConsultationsService } from './consultations.service';
import { Consultation } from './entities/consultation.entity';
import { CreateConsultationInput } from './dto/create-consultation.input';
import { UpdateConsultationInput } from './dto/update-consultation.input';
import { createResolver } from '../common/generic.resolver';

const genericResolver = createResolver<Consultation, CreateConsultationInput, UpdateConsultationInput>(
  Consultation,
  CreateConsultationInput,
  UpdateConsultationInput
);
@Resolver(() => Consultation)
export class ConsultationsResolver  extends genericResolver {
  constructor(private readonly consultationsService: ConsultationsService) {
    super(consultationsService);
  }
}
