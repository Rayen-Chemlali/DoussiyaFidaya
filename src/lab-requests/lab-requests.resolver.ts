import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LabRequestsService } from './lab-requests.service';
import { LabRequest } from './entities/lab-request.entity';
import { CreateLabRequestInput } from './dto/create-lab-request.input';
import { UpdateLabRequestInput } from './dto/update-lab-request.input';

@Resolver(() => LabRequest)
export class LabRequestsResolver {
  constructor(private readonly labRequestsService: LabRequestsService) {}

  @Mutation(() => LabRequest)
  createLabRequest(@Args('createLabRequestInput') createLabRequestInput: CreateLabRequestInput) {
    return this.labRequestsService.create(createLabRequestInput);
  }

  @Query(() => [LabRequest], { name: 'labRequests' })
  findAll() {
    return this.labRequestsService.findAll();
  }

  @Query(() => LabRequest, { name: 'labRequest' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.labRequestsService.findOne(id);
  }

  @Mutation(() => LabRequest)
  updateLabRequest(@Args('updateLabRequestInput') updateLabRequestInput: UpdateLabRequestInput) {
    return this.labRequestsService.update(updateLabRequestInput.id, updateLabRequestInput);
  }

  @Mutation(() => LabRequest)
  removeLabRequest(@Args('id', { type: () => Int }) id: number) {
    return this.labRequestsService.remove(id);
  }
}
