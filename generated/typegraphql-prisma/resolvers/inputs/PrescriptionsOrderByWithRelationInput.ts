import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsOrderByWithRelationInput } from "../inputs/ConsultationsOrderByWithRelationInput";
import { DoctorsOrderByWithRelationInput } from "../inputs/DoctorsOrderByWithRelationInput";
import { MedicationsOrderByRelationAggregateInput } from "../inputs/MedicationsOrderByRelationAggregateInput";
import { PatientsOrderByWithRelationInput } from "../inputs/PatientsOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PrescriptionsOrderByWithRelationInput", {})
export class PrescriptionsOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  instructions?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  is_signed?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  section?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updated_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  doctor_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  patient_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ConsultationsOrderByWithRelationInput, {
    nullable: true
  })
  consultations?: ConsultationsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => MedicationsOrderByRelationAggregateInput, {
    nullable: true
  })
  medications?: MedicationsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsOrderByWithRelationInput, {
    nullable: true
  })
  doctors?: DoctorsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PatientsOrderByWithRelationInput, {
    nullable: true
  })
  patients?: PatientsOrderByWithRelationInput | undefined;
}
