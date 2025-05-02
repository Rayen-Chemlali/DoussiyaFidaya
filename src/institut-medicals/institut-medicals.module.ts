import { Module } from '@nestjs/common';
import { InstitutMedicalsService } from './institut-medicals.service';
import { InstitutMedicalsResolver } from './institut-medicals.resolver';
import { InstitutMedical } from './entities/institut-medical.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([InstitutMedical])],

  providers: [InstitutMedicalsResolver, InstitutMedicalsService],
})
export class InstitutMedicalsModule {}
