import { InputType, Int, Field, PartialType, OmitType } from '@nestjs/graphql';
import { Consultation } from '../entities/consultation.entity';

@InputType()
export class CreateConsultationInput extends OmitType(Consultation,['id','patient','doctor','institut_medical','prescription','lab_requests']) {

}
