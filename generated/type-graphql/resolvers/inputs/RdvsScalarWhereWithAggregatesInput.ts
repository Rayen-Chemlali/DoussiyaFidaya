import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { UuidNullableWithAggregatesFilter } from "../inputs/UuidNullableWithAggregatesFilter";
import { UuidWithAggregatesFilter } from "../inputs/UuidWithAggregatesFilter";

@TypeGraphQL.InputType("RdvsScalarWhereWithAggregatesInput", {})
export class RdvsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [RdvsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: RdvsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RdvsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: RdvsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RdvsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: RdvsScalarWhereWithAggregatesInput[] | undefined;

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
  consultation_id?: UuidNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => UuidNullableWithAggregatesFilter, {
    nullable: true
  })
  rdv_request_id?: UuidNullableWithAggregatesFilter | undefined;
}
