import { Injectable } from '@nestjs/common';
import { CreateAnalysisResultInput } from './dto/create-analysis-result.input';
import { UpdateAnalysisResultInput } from './dto/update-analysis-result.input';

@Injectable()
export class AnalysisResultsService {
  create(createAnalysisResultInput: CreateAnalysisResultInput) {
    return 'This action adds a new analysisResult';
  }

  findAll() {
    return `This action returns all analysisResults`;
  }

  findOne(id: number) {
    return `This action returns a #${id} analysisResult`;
  }

  update(id: number, updateAnalysisResultInput: UpdateAnalysisResultInput) {
    return `This action updates a #${id} analysisResult`;
  }

  remove(id: number) {
    return `This action removes a #${id} analysisResult`;
  }
}
