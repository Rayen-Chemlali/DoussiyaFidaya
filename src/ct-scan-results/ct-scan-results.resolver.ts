import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CtScanResultsService } from './ct-scan-results.service';
import { CtScanResult } from './entities/ct-scan-result.entity';
import { CreateCtScanResultInput } from './dto/create-ct-scan-result.input';
import { UpdateCtScanResultInput } from './dto/update-ct-scan-result.input';

@Resolver(() => CtScanResult)
export class CtScanResultsResolver {
  constructor(private readonly ctScanResultsService: CtScanResultsService) {}

  @Mutation(() => CtScanResult)
  createCtScanResult(@Args('createCtScanResultInput') createCtScanResultInput: CreateCtScanResultInput) {
    return this.ctScanResultsService.create(createCtScanResultInput);
  }

  @Query(() => [CtScanResult], { name: 'ctScanResults' })
  findAll() {
    return this.ctScanResultsService.findAll();
  }

  @Query(() => CtScanResult, { name: 'ctScanResult' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.ctScanResultsService.findOne(id);
  }

  @Mutation(() => CtScanResult)
  updateCtScanResult(@Args('updateCtScanResultInput') updateCtScanResultInput: UpdateCtScanResultInput) {
    return this.ctScanResultsService.update(updateCtScanResultInput.id, updateCtScanResultInput);
  }

  @Mutation(() => CtScanResult)
  removeCtScanResult(@Args('id', { type: () => Int }) id: number) {
    return this.ctScanResultsService.remove(id);
  }
}
