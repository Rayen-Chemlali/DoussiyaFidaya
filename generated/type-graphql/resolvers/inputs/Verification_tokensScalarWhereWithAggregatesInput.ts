import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
import { UuidWithAggregatesFilter } from "../inputs/UuidWithAggregatesFilter";

@TypeGraphQL.InputType("Verification_tokensScalarWhereWithAggregatesInput", {})
export class Verification_tokensScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Verification_tokensScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Verification_tokensScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Verification_tokensScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Verification_tokensScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Verification_tokensScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Verification_tokensScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidWithAggregatesFilter, {
    nullable: true
  })
  id?: UuidWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => UuidWithAggregatesFilter, {
    nullable: true
  })
  userId?: UuidWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  token?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  numberofTries?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  expireAt?: DateTimeWithAggregatesFilter | undefined;
}
