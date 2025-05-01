import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AnalysisResultsService } from './analysis-results.service';
import { AnalysisResult } from './entities/analysis-result.entity';
import { CreateAnalysisResultInput } from './dto/create-analysis-result.input';
import { UpdateAnalysisResultInput } from './dto/update-analysis-result.input';

@Resolver(() => AnalysisResult)
export class AnalysisResultsResolver {
  constructor(private readonly analysisResultsService: AnalysisResultsService) {}

  @Mutation(() => AnalysisResult)
  createAnalysisResult(@Args('createAnalysisResultInput') createAnalysisResultInput: CreateAnalysisResultInput) {
    return this.analysisResultsService.create(createAnalysisResultInput);
  }

  @Query(() => [AnalysisResult], { name: 'analysisResults' })
  findAll() {
    return this.analysisResultsService.findAll();
  }

  @Query(() => AnalysisResult, { name: 'analysisResult' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.analysisResultsService.findOne(id);
  }

  @Mutation(() => AnalysisResult)
  updateAnalysisResult(@Args('updateAnalysisResultInput') updateAnalysisResultInput: UpdateAnalysisResultInput) {
    return this.analysisResultsService.update(updateAnalysisResultInput.id, updateAnalysisResultInput);
  }

  @Mutation(() => AnalysisResult)
  removeAnalysisResult(@Args('id', { type: () => Int }) id: number) {
    return this.analysisResultsService.remove(id);
  }
}
