import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsListRelationFilter } from "../inputs/ConsultationsListRelationFilter";
import { DoctorsNullableRelationFilter } from "../inputs/DoctorsNullableRelationFilter";
import { Enumlab_requests_priority_enumNullableFilter } from "../inputs/Enumlab_requests_priority_enumNullableFilter";
import { Lab_documentsListRelationFilter } from "../inputs/Lab_documentsListRelationFilter";
import { Lab_requestsWhereInput } from "../inputs/Lab_requestsWhereInput";
import { PatientsRelationFilter } from "../inputs/PatientsRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UuidFilter } from "../inputs/UuidFilter";
import { UuidNullableFilter } from "../inputs/UuidNullableFilter";

@TypeGraphQL.InputType("Lab_requestsWhereUniqueInput", {})
export class Lab_requestsWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => [Lab_requestsWhereInput], {
    nullable: true
  })
  AND?: Lab_requestsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_requestsWhereInput], {
    nullable: true
  })
  OR?: Lab_requestsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_requestsWhereInput], {
    nullable: true
  })
  NOT?: Lab_requestsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  type?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => Enumlab_requests_priority_enumNullableFilter, {
    nullable: true
  })
  priority?: Enumlab_requests_priority_enumNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UuidNullableFilter, {
    nullable: true
  })
  doctor_id?: UuidNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  patient_id?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => Lab_documentsListRelationFilter, {
    nullable: true
  })
  lab_documents?: Lab_documentsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DoctorsNullableRelationFilter, {
    nullable: true
  })
  doctors?: DoctorsNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PatientsRelationFilter, {
    nullable: true
  })
  patients?: PatientsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ConsultationsListRelationFilter, {
    nullable: true
  })
  consultations?: ConsultationsListRelationFilter | undefined;
}
