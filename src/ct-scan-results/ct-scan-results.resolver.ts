import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CtScanResultsService } from './ct-scan-results.service';
import { CreateCtScanResultInput } from './dto/create-ct-scan-result.input';
import { UpdateCtScanResultInput } from './dto/update-ct-scan-result.input';
import { CTScanResult } from './entities/ct-scan-result.entity';

@Resolver(() => CTScanResult)
export class CtScanResultsResolver {
  constructor(private readonly ctScanResultsService: CtScanResultsService) {}

  @Mutation(() => CTScanResult)
  createCtScanResult(@Args('createCtScanResultInput') createCtScanResultInput: CreateCtScanResultInput) {
    return this.ctScanResultsService.create(createCtScanResultInput);
  }

  @Query(() => [CTScanResult], { name: 'ctScanResults' })
  findAll() {
    return this.ctScanResultsService.findAll();
  }

  @Query(() => CTScanResult, { name: 'ctScanResult' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.ctScanResultsService.findOne(id);
  }

  @Mutation(() => CTScanResult)
  updateCtScanResult(@Args('updateCtScanResultInput') updateCtScanResultInput: UpdateCtScanResultInput) {
    return this.ctScanResultsService.update(updateCtScanResultInput.id, updateCtScanResultInput);
  }

  @Mutation(() => CTScanResult)
  removeCtScanResult(@Args('id', { type: () => Int }) id: number) {
    return this.ctScanResultsService.remove(id);
  }
}
