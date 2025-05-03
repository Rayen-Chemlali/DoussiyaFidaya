import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Analysis_resultsOrderByRelationAggregateInput } from "../inputs/Analysis_resultsOrderByRelationAggregateInput";
import { Ctscan_resultsOrderByRelationAggregateInput } from "../inputs/Ctscan_resultsOrderByRelationAggregateInput";
import { Lab_attachmentsOrderByRelationAggregateInput } from "../inputs/Lab_attachmentsOrderByRelationAggregateInput";
import { Lab_requestsOrderByWithRelationInput } from "../inputs/Lab_requestsOrderByWithRelationInput";
import { Lab_resultsOrderByRelationAggregateInput } from "../inputs/Lab_resultsOrderByRelationAggregateInput";
import { LaboratoriesOrderByWithRelationInput } from "../inputs/LaboratoriesOrderByWithRelationInput";
import { PatientsOrderByWithRelationInput } from "../inputs/PatientsOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { Xray_resultsOrderByRelationAggregateInput } from "../inputs/Xray_resultsOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Lab_documentsOrderByWithRelationInput", {})
export class Lab_documentsOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  completed_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  notes?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  requested_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  section?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  patient_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  laboratory_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  lab_request_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Analysis_resultsOrderByRelationAggregateInput, {
    nullable: true
  })
  analysis_results?: Analysis_resultsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Ctscan_resultsOrderByRelationAggregateInput, {
    nullable: true
  })
  ctscan_results?: Ctscan_resultsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Lab_attachmentsOrderByRelationAggregateInput, {
    nullable: true
  })
  lab_attachments?: Lab_attachmentsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LaboratoriesOrderByWithRelationInput, {
    nullable: true
  })
  laboratories?: LaboratoriesOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PatientsOrderByWithRelationInput, {
    nullable: true
  })
  patients?: PatientsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => Lab_requestsOrderByWithRelationInput, {
    nullable: true
  })
  lab_requests?: Lab_requestsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => Lab_resultsOrderByRelationAggregateInput, {
    nullable: true
  })
  lab_results?: Lab_resultsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Xray_resultsOrderByRelationAggregateInput, {
    nullable: true
  })
  xray_results?: Xray_resultsOrderByRelationAggregateInput | undefined;
}
