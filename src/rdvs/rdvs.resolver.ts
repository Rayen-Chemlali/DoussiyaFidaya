import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RdvsService } from './rdvs.service';
import { Rdv } from './entities/rdv.entity';
import { CreateRdvInput } from './dto/create-rdv.input';
import { UpdateRdvInput } from './dto/update-rdv.input';

@Resolver(() => Rdv)
export class RdvsResolver {
  constructor(private readonly rdvsService: RdvsService) {}

  @Mutation(() => Rdv)
  createRdv(@Args('createRdvInput') createRdvInput: CreateRdvInput) {
    return this.rdvsService.create(createRdvInput);
  }

  @Query(() => [Rdv], { name: 'rdvs' })
  findAll() {
    return this.rdvsService.findAll();
  }

  @Query(() => Rdv, { name: 'rdv' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.rdvsService.findOne(id);
  }

  @Mutation(() => Rdv)
  updateRdv(@Args('updateRdvInput') updateRdvInput: UpdateRdvInput) {
    return this.rdvsService.update(updateRdvInput.id, updateRdvInput);
  }

  @Mutation(() => Rdv)
  removeRdv(@Args('id', { type: () => Int }) id: number) {
    return this.rdvsService.remove(id);
  }
}
