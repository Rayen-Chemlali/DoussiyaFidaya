import { Module } from '@nestjs/common';
import { CliniquesService } from './cliniques.service';
import { CliniquesResolver } from './cliniques.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clinique } from './entities/clinique.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Clinique])],
  providers: [CliniquesResolver, CliniquesService],
})
export class CliniquesModule {}
