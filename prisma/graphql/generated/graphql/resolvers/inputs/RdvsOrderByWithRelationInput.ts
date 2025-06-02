import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsOrderByWithRelationInput } from "../inputs/ConsultationsOrderByWithRelationInput";
import { DoctorsOrderByWithRelationInput } from "../inputs/DoctorsOrderByWithRelationInput";
import { PatientsOrderByWithRelationInput } from "../inputs/PatientsOrderByWithRelationInput";
import { Rdv_requestsOrderByWithRelationInput } from "../inputs/Rdv_requestsOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("RdvsOrderByWithRelationInput", {})
export class RdvsOrderByWithRelationInput {
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
  patient_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  doctor_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  consultation_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  rdv_request_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Rdv_requestsOrderByWithRelationInput, {
    nullable: true
  })
  rdv_requests_rdv_requests_rdv_idTordvs?: Rdv_requestsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationsOrderByWithRelationInput, {
    nullable: true
  })
  consultations?: ConsultationsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PatientsOrderByWithRelationInput, {
    nullable: true
  })
  patients?: PatientsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => Rdv_requestsOrderByWithRelationInput, {
    nullable: true
  })
  rdv_requests_rdvs_rdv_request_idTordv_requests?: Rdv_requestsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsOrderByWithRelationInput, {
    nullable: true
  })
  doctors?: DoctorsOrderByWithRelationInput | undefined;
}
