import { Module } from '@nestjs/common';
import { CliniquesService } from './cliniques.service';
import { CliniquesResolver } from './cliniques.resolver';

@Module({
  providers: [CliniquesResolver, CliniquesService],
})
export class CliniquesModule {}
