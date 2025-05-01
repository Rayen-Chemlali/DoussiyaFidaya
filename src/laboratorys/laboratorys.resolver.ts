import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LaboratorysService } from './laboratorys.service';
import { Laboratory } from './entities/laboratory.entity';
import { CreateLaboratoryInput } from './dto/create-laboratory.input';
import { UpdateLaboratoryInput } from './dto/update-laboratory.input';

@Resolver(() => Laboratory)
export class LaboratorysResolver {
  constructor(private readonly laboratorysService: LaboratorysService) {}

  @Mutation(() => Laboratory)
  createLaboratory(@Args('createLaboratoryInput') createLaboratoryInput: CreateLaboratoryInput) {
    return this.laboratorysService.create(createLaboratoryInput);
  }

  @Query(() => [Laboratory], { name: 'laboratorys' })
  findAll() {
    return this.laboratorysService.findAll();
  }

  @Query(() => Laboratory, { name: 'laboratory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.laboratorysService.findOne(id);
  }

  @Mutation(() => Laboratory)
  updateLaboratory(@Args('updateLaboratoryInput') updateLaboratoryInput: UpdateLaboratoryInput) {
    return this.laboratorysService.update(updateLaboratoryInput.id, updateLaboratoryInput);
  }

  @Mutation(() => Laboratory)
  removeLaboratory(@Args('id', { type: () => Int }) id: number) {
    return this.laboratorysService.remove(id);
  }
}
