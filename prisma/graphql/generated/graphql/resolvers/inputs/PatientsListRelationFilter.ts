import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsWhereInput } from "../inputs/PatientsWhereInput";

@TypeGraphQL.InputType("PatientsListRelationFilter", {})
export class PatientsListRelationFilter {
  @TypeGraphQL.Field(_type => PatientsWhereInput, {
    nullable: true
  })
  every?: PatientsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PatientsWhereInput, {
    nullable: true
  })
  some?: PatientsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PatientsWhereInput, {
    nullable: true
  })
  none?: PatientsWhereInput | undefined;
}
