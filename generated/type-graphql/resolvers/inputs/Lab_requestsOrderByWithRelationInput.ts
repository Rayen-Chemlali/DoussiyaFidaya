import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsOrderByRelationAggregateInput } from "../inputs/ConsultationsOrderByRelationAggregateInput";
import { DoctorsOrderByWithRelationInput } from "../inputs/DoctorsOrderByWithRelationInput";
import { Lab_documentsOrderByRelationAggregateInput } from "../inputs/Lab_documentsOrderByRelationAggregateInput";
import { PatientsOrderByWithRelationInput } from "../inputs/PatientsOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Lab_requestsOrderByWithRelationInput", {})
export class Lab_requestsOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  priority?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  description?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  doctor_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  patient_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsOrderByRelationAggregateInput, {
    nullable: true
  })
  lab_documents?: Lab_documentsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsOrderByWithRelationInput, {
    nullable: true
  })
  doctors?: DoctorsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PatientsOrderByWithRelationInput, {
    nullable: true
  })
  patients?: PatientsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationsOrderByRelationAggregateInput, {
    nullable: true
  })
  consultations?: ConsultationsOrderByRelationAggregateInput | undefined;
}
