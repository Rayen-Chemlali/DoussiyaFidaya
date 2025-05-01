import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CliniquesService } from './cliniques.service';
import { Clinique } from './entities/clinique.entity';
import { CreateCliniqueInput } from './dto/create-clinique.input';
import { UpdateCliniqueInput } from './dto/update-clinique.input';

@Resolver(() => Clinique)
export class CliniquesResolver {
  constructor(private readonly cliniquesService: CliniquesService) {}

  @Mutation(() => Clinique)
  createClinique(@Args('createCliniqueInput') createCliniqueInput: CreateCliniqueInput) {
    return this.cliniquesService.create(createCliniqueInput);
  }

  @Query(() => [Clinique], { name: 'cliniques' })
  findAll() {
    return this.cliniquesService.findAll();
  }

  @Query(() => Clinique, { name: 'clinique' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.cliniquesService.findOne(id);
  }

  @Mutation(() => Clinique)
  updateClinique(@Args('updateCliniqueInput') updateCliniqueInput: UpdateCliniqueInput) {
    return this.cliniquesService.update(updateCliniqueInput.id, updateCliniqueInput);
  }

  @Mutation(() => Clinique)
  removeClinique(@Args('id', { type: () => Int }) id: number) {
    return this.cliniquesService.remove(id);
  }
}
