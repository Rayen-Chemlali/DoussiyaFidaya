import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LaboratoriesWhereInput } from "../inputs/LaboratoriesWhereInput";

@TypeGraphQL.InputType("LaboratoriesNullableRelationFilter", {})
export class LaboratoriesNullableRelationFilter {
  @TypeGraphQL.Field(_type => LaboratoriesWhereInput, {
    nullable: true
  })
  is?: LaboratoriesWhereInput | undefined;

  @TypeGraphQL.Field(_type => LaboratoriesWhereInput, {
    nullable: true
  })
  isNot?: LaboratoriesWhereInput | undefined;
}
