import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsWhereInput } from "../inputs/PatientsWhereInput";

@TypeGraphQL.InputType("PatientsNullableRelationFilter", {})
export class PatientsNullableRelationFilter {
  @TypeGraphQL.Field(_type => PatientsWhereInput, {
    nullable: true
  })
  is?: PatientsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PatientsWhereInput, {
    nullable: true
  })
  isNot?: PatientsWhereInput | undefined;
}
