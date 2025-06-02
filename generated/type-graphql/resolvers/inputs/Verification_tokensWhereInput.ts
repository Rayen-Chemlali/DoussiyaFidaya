import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UsersRelationFilter } from "../inputs/UsersRelationFilter";
import { UuidFilter } from "../inputs/UuidFilter";

@TypeGraphQL.InputType("Verification_tokensWhereInput", {})
export class Verification_tokensWhereInput {
  @TypeGraphQL.Field(_type => [Verification_tokensWhereInput], {
    nullable: true
  })
  AND?: Verification_tokensWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Verification_tokensWhereInput], {
    nullable: true
  })
  OR?: Verification_tokensWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Verification_tokensWhereInput], {
    nullable: true
  })
  NOT?: Verification_tokensWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  id?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  userId?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  token?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  numberofTries?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  expireAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => UsersRelationFilter, {
    nullable: true
  })
  user?: UsersRelationFilter | undefined;
}
