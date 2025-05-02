import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RdvRequestsService } from './rdv-requests.service';
import { RdvRequest } from './entities/rdv-request.entity';
import { CreateRdvRequestInput } from './dto/create-rdv-request.input';
import { UpdateRdvRequestInput } from './dto/update-rdv-request.input';

@Resolver(() => RdvRequest)
export class RdvRequestsResolver {
  constructor(private readonly rdvRequestsService: RdvRequestsService) {}

  @Mutation(() => RdvRequest)
  createRdvRequest(@Args('createRdvRequestInput') createRdvRequestInput: CreateRdvRequestInput) {
    return this.rdvRequestsService.create(createRdvRequestInput);
  }

  @Query(() => [RdvRequest], { name: 'rdvRequests' })
  findAll() {
    return this.rdvRequestsService.findAll();
  }

  @Query(() => RdvRequest, { name: 'rdvRequest' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.rdvRequestsService.findOne(id);
  }

  @Mutation(() => RdvRequest)
  updateRdvRequest(@Args('updateRdvRequestInput') updateRdvRequestInput: UpdateRdvRequestInput) {
    return this.rdvRequestsService.update(updateRdvRequestInput.id, updateRdvRequestInput);
  }

  @Mutation(() => RdvRequest)
  removeRdvRequest(@Args('id', { type: () => Int }) id: number) {
    return this.rdvRequestsService.remove(id);
  }
}
