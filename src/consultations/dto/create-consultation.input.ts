import { InputType, Int, Field, PartialType, OmitType } from '@nestjs/graphql';
import { Consultation } from '../entities/consultation.entity';

@InputType()
export class CreateConsultationInput extends OmitType(Consultation,['id','patient','doctor','institut_medical','prescription','lab_requests']) {
  @Field(() => String, { description: 'ID of the patient' })
  patient_id: string;

  @Field(() => String, { description: 'ID of the doctor' })
  doctor_id: string;

  @Field(() => String, { description: 'ID of the medical institute' })
  institut_medical_id: string;

  @Field(() => String, { description: 'ID of the prescription' })
  prescription_id: string;

  @Field(() => [String], { description: 'IDs of the lab requests' })
  lab_request_ids: string[];
}
