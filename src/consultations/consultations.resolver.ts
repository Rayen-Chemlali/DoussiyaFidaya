import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ConsultationsService } from './consultations.service';
import { Consultation } from './entities/consultation.entity';
import { CreateConsultationInput } from './dto/create-consultation.input';
import { UpdateConsultationInput } from './dto/update-consultation.input';

@Resolver(() => Consultation)
export class ConsultationsResolver {
  constructor(private readonly consultationsService: ConsultationsService) {}

  @Mutation(() => Consultation)
  createConsultation(@Args('createConsultationInput') createConsultationInput: CreateConsultationInput) {
    return this.consultationsService.create(createConsultationInput);
  }

  @Query(() => [Consultation], { name: 'consultations' })
  findAll() {
    return this.consultationsService.genericFindAll();
  }

  @Query(() => Consultation, { name: 'consultation' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.consultationsService.genericFindOne(id);
  }
/*
  @Mutation(() => Consultation)
  updateConsultation(@Args('updateConsultationInput') updateConsultationInput: UpdateConsultationInput) {
    return this.consultationsService.update(updateConsultationInput.id, updateConsultationInput);
  }

  @Mutation(() => Consultation)
  removeConsultation(@Args('id', { type: () => Int }) id: number) {
    return this.consultationsService.remove(id);
  }
    */
}
