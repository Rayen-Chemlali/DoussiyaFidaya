import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HopitalsService } from './hopitals.service';
import { Hopital } from './entities/hopital.entity';
import { CreateHopitalInput } from './dto/create-hopital.input';
import { UpdateHopitalInput } from './dto/update-hopital.input';

@Resolver(() => Hopital)
export class HopitalsResolver {
  constructor(private readonly hopitalsService: HopitalsService) {}

  @Mutation(() => Hopital)
  createHopital(@Args('createHopitalInput') createHopitalInput: CreateHopitalInput) {
    return this.hopitalsService.create(createHopitalInput);
  }

  @Query(() => [Hopital], { name: 'hopitals' })
  findAll() {
    return this.hopitalsService.findAll();
  }

  @Query(() => Hopital, { name: 'hopital' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.hopitalsService.findOne(id);
  }

  @Mutation(() => Hopital)
  updateHopital(@Args('updateHopitalInput') updateHopitalInput: UpdateHopitalInput) {
    return this.hopitalsService.update(updateHopitalInput.id, updateHopitalInput);
  }

  @Mutation(() => Hopital)
  removeHopital(@Args('id', { type: () => Int }) id: number) {
    return this.hopitalsService.remove(id);
  }
}
