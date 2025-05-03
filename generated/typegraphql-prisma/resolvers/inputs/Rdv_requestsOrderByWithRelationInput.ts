import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsOrderByWithRelationInput } from "../inputs/DoctorsOrderByWithRelationInput";
import { PatientsOrderByWithRelationInput } from "../inputs/PatientsOrderByWithRelationInput";
import { RdvsOrderByWithRelationInput } from "../inputs/RdvsOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Rdv_requestsOrderByWithRelationInput", {})
export class Rdv_requestsOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  time?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Motif?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  patient_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  doctor_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  rdv_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => RdvsOrderByWithRelationInput, {
    nullable: true
  })
  rdvs_rdv_requests_rdv_idTordvs?: RdvsOrderByWithRelationInput | undefined;

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
  rdvs_rdvs_rdv_request_idTordv_requests?: RdvsOrderByWithRelationInput | undefined;
}
