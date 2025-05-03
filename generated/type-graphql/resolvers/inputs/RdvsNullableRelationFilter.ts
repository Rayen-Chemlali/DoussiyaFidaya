import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RdvsWhereInput } from "../inputs/RdvsWhereInput";

@TypeGraphQL.InputType("RdvsNullableRelationFilter", {})
export class RdvsNullableRelationFilter {
  @TypeGraphQL.Field(_type => RdvsWhereInput, {
    nullable: true
  })
  is?: RdvsWhereInput | undefined;

  @TypeGraphQL.Field(_type => RdvsWhereInput, {
    nullable: true
  })
  isNot?: RdvsWhereInput | undefined;
}
