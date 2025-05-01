import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InstitutMedicalsService } from './institut-medicals.service';
import { InstitutMedical } from './entities/institut-medical.entity';
import { CreateInstitutMedicalInput } from './dto/create-institut-medical.input';
import { UpdateInstitutMedicalInput } from './dto/update-institut-medical.input';

@Resolver(() => InstitutMedical)
export class InstitutMedicalsResolver {
  constructor(private readonly institutMedicalsService: InstitutMedicalsService) {}

  @Mutation(() => InstitutMedical)
  createInstitutMedical(@Args('createInstitutMedicalInput') createInstitutMedicalInput: CreateInstitutMedicalInput) {
    return this.institutMedicalsService.create(createInstitutMedicalInput);
  }

  @Query(() => [InstitutMedical], { name: 'institutMedicals' })
  findAll() {
    return this.institutMedicalsService.findAll();
  }

  @Query(() => InstitutMedical, { name: 'institutMedical' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.institutMedicalsService.findOne(id);
  }

  @Mutation(() => InstitutMedical)
  updateInstitutMedical(@Args('updateInstitutMedicalInput') updateInstitutMedicalInput: UpdateInstitutMedicalInput) {
    return this.institutMedicalsService.update(updateInstitutMedicalInput.id, updateInstitutMedicalInput);
  }

  @Mutation(() => InstitutMedical)
  removeInstitutMedical(@Args('id', { type: () => Int }) id: number) {
    return this.institutMedicalsService.remove(id);
  }
}
