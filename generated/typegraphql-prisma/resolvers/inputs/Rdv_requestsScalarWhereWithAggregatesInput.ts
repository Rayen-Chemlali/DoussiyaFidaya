import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
import { UuidNullableWithAggregatesFilter } from "../inputs/UuidNullableWithAggregatesFilter";
import { UuidWithAggregatesFilter } from "../inputs/UuidWithAggregatesFilter";

@TypeGraphQL.InputType("Rdv_requestsScalarWhereWithAggregatesInput", {})
export class Rdv_requestsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Rdv_requestsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Rdv_requestsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Rdv_requestsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Rdv_requestsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Rdv_requestsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Rdv_requestsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidWithAggregatesFilter, {
    nullable: true
  })
  id?: UuidWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  date?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  time?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  Motif?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  Status?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => UuidWithAggregatesFilter, {
    nullable: true
  })
  patient_id?: UuidWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => UuidNullableWithAggregatesFilter, {
    nullable: true
  })
  doctor_id?: UuidNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => UuidNullableWithAggregatesFilter, {
    nullable: true
  })
  rdv_id?: UuidNullableWithAggregatesFilter | undefined;
}
