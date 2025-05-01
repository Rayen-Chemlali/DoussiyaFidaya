import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { XrayResultsService } from './xray-results.service';
import { XrayResult } from './entities/xray-result.entity';
import { CreateXrayResultInput } from './dto/create-xray-result.input';
import { UpdateXrayResultInput } from './dto/update-xray-result.input';

@Resolver(() => XrayResult)
export class XrayResultsResolver {
  constructor(private readonly xrayResultsService: XrayResultsService) {}

  @Mutation(() => XrayResult)
  createXrayResult(@Args('createXrayResultInput') createXrayResultInput: CreateXrayResultInput) {
    return this.xrayResultsService.create(createXrayResultInput);
  }

  @Query(() => [XrayResult], { name: 'xrayResults' })
  findAll() {
    return this.xrayResultsService.findAll();
  }

  @Query(() => XrayResult, { name: 'xrayResult' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.xrayResultsService.findOne(id);
  }

  @Mutation(() => XrayResult)
  updateXrayResult(@Args('updateXrayResultInput') updateXrayResultInput: UpdateXrayResultInput) {
    return this.xrayResultsService.update(updateXrayResultInput.id, updateXrayResultInput);
  }

  @Mutation(() => XrayResult)
  removeXrayResult(@Args('id', { type: () => Int }) id: number) {
    return this.xrayResultsService.remove(id);
  }
}
