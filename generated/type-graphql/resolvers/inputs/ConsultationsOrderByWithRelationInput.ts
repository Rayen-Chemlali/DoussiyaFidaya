import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Consultation_lab_requestsOrderByRelationAggregateInput } from "../inputs/Consultation_lab_requestsOrderByRelationAggregateInput";
import { DoctorsOrderByWithRelationInput } from "../inputs/DoctorsOrderByWithRelationInput";
import { Instituts_medicauxOrderByWithRelationInput } from "../inputs/Instituts_medicauxOrderByWithRelationInput";
import { PatientsOrderByWithRelationInput } from "../inputs/PatientsOrderByWithRelationInput";
import { PrescriptionsOrderByWithRelationInput } from "../inputs/PrescriptionsOrderByWithRelationInput";
import { RdvsOrderByWithRelationInput } from "../inputs/RdvsOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ConsultationsOrderByWithRelationInput", {})
export class ConsultationsOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  section?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  notes?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  measures?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  doctor_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  institut_medical_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  prescription_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  patient_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Consultation_lab_requestsOrderByRelationAggregateInput, {
    nullable: true
  })
  consultation_lab_requests?: Consultation_lab_requestsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PrescriptionsOrderByWithRelationInput, {
    nullable: true
  })
  prescriptions?: PrescriptionsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => Instituts_medicauxOrderByWithRelationInput, {
    nullable: true
  })
  instituts_medicaux?: Instituts_medicauxOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PatientsOrderByWithRelationInput, {
    nullable: true
  })
  patients?: PatientsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsOrderByWithRelationInput, {
    nullable: true
  })
  doctors?: DoctorsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => RdvsOrderByWithRelationInput, {
    nullable: true
  })
  rdvs?: RdvsOrderByWithRelationInput | undefined;
}
