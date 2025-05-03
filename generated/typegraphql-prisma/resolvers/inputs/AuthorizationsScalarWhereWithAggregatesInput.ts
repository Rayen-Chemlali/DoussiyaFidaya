import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Enumauthorizations_level_enumWithAggregatesFilter } from "../inputs/Enumauthorizations_level_enumWithAggregatesFilter";
import { UuidNullableWithAggregatesFilter } from "../inputs/UuidNullableWithAggregatesFilter";
import { UuidWithAggregatesFilter } from "../inputs/UuidWithAggregatesFilter";

@TypeGraphQL.InputType("AuthorizationsScalarWhereWithAggregatesInput", {})
export class AuthorizationsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [AuthorizationsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: AuthorizationsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorizationsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: AuthorizationsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorizationsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: AuthorizationsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidWithAggregatesFilter, {
    nullable: true
  })
  id?: UuidWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => Enumauthorizations_level_enumWithAggregatesFilter, {
    nullable: true
  })
  level?: Enumauthorizations_level_enumWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => UuidNullableWithAggregatesFilter, {
    nullable: true
  })
  institut_medical_id?: UuidNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => UuidWithAggregatesFilter, {
    nullable: true
  })
  patient_id?: UuidWithAggregatesFilter | undefined;
}
