import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CertificatesOrderByRelationAggregateInput } from "../inputs/CertificatesOrderByRelationAggregateInput";
import { ConsultationsOrderByRelationAggregateInput } from "../inputs/ConsultationsOrderByRelationAggregateInput";
import { Instituts_medicauxOrderByRelationAggregateInput } from "../inputs/Instituts_medicauxOrderByRelationAggregateInput";
import { Lab_requestsOrderByRelationAggregateInput } from "../inputs/Lab_requestsOrderByRelationAggregateInput";
import { PrescriptionsOrderByRelationAggregateInput } from "../inputs/PrescriptionsOrderByRelationAggregateInput";
import { Rdv_requestsOrderByRelationAggregateInput } from "../inputs/Rdv_requestsOrderByRelationAggregateInput";
import { RdvsOrderByRelationAggregateInput } from "../inputs/RdvsOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { UsersOrderByWithRelationInput } from "../inputs/UsersOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("DoctorsOrderByWithRelationInput", {})
export class DoctorsOrderByWithRelationInput {
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
  bio?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  education?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  experience?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  first_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  languages?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  last_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  profile_image?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  specialty?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  user_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CertificatesOrderByRelationAggregateInput, {
    nullable: true
  })
  certificates?: CertificatesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationsOrderByRelationAggregateInput, {
    nullable: true
  })
  consultations?: ConsultationsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Instituts_medicauxOrderByRelationAggregateInput, {
    nullable: true
  })
  instituts_medicaux?: Instituts_medicauxOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UsersOrderByWithRelationInput, {
    nullable: true
  })
  users?: UsersOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => Lab_requestsOrderByRelationAggregateInput, {
    nullable: true
  })
  lab_requests?: Lab_requestsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PrescriptionsOrderByRelationAggregateInput, {
    nullable: true
  })
  prescriptions?: PrescriptionsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Rdv_requestsOrderByRelationAggregateInput, {
    nullable: true
  })
  rdv_requests?: Rdv_requestsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RdvsOrderByRelationAggregateInput, {
    nullable: true
  })
  rdvs?: RdvsOrderByRelationAggregateInput | undefined;
}
