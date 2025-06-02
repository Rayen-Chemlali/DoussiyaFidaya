import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Verification_tokensWhereInput } from "../inputs/Verification_tokensWhereInput";

@TypeGraphQL.InputType("Verification_tokensNullableRelationFilter", {})
export class Verification_tokensNullableRelationFilter {
  @TypeGraphQL.Field(_type => Verification_tokensWhereInput, {
    nullable: true
  })
  is?: Verification_tokensWhereInput | undefined;

  @TypeGraphQL.Field(_type => Verification_tokensWhereInput, {
    nullable: true
  })
  isNot?: Verification_tokensWhereInput | undefined;
}
