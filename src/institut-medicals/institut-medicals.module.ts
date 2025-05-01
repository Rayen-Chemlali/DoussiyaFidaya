import { Module } from '@nestjs/common';
import { InstitutMedicalsService } from './institut-medicals.service';
import { InstitutMedicalsResolver } from './institut-medicals.resolver';

@Module({
  providers: [InstitutMedicalsResolver, InstitutMedicalsService],
})
export class InstitutMedicalsModule {}
