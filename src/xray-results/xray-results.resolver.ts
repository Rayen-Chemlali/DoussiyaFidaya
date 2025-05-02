import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { XrayResultsService } from './xray-results.service';
import { XRayResult } from './entities/xray-result.entity';
import { CreateXrayResultInput } from './dto/create-xray-result.input';
import { UpdateXrayResultInput } from './dto/update-xray-result.input';

@Resolver(() => XRayResult)
export class XrayResultsResolver {
  constructor(private readonly xrayResultsService: XrayResultsService) {}

  @Mutation(() => XRayResult)
  createXrayResult(@Args('createXrayResultInput') createXrayResultInput: CreateXrayResultInput) {
    return this.xrayResultsService.create(createXrayResultInput);
  }

  @Query(() => [XRayResult], { name: 'xrayResults' })
  findAll() {
    return this.xrayResultsService.findAll();
  }

  @Query(() => XRayResult, { name: 'xrayResult' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.xrayResultsService.findOne(id);
  }

  @Mutation(() => XRayResult)
  updateXrayResult(@Args('updateXrayResultInput') updateXrayResultInput: UpdateXrayResultInput) {
    return this.xrayResultsService.update(updateXrayResultInput.id, updateXrayResultInput);
  }

  @Mutation(() => XRayResult)
  removeXrayResult(@Args('id', { type: () => Int }) id: number) {
    return this.xrayResultsService.remove(id);
  }
}
