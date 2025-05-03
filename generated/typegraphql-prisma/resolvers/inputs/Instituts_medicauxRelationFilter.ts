import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Instituts_medicauxWhereInput } from "../inputs/Instituts_medicauxWhereInput";

@TypeGraphQL.InputType("Instituts_medicauxRelationFilter", {})
export class Instituts_medicauxRelationFilter {
  @TypeGraphQL.Field(_type => Instituts_medicauxWhereInput, {
    nullable: true
  })
  is?: Instituts_medicauxWhereInput | undefined;

  @TypeGraphQL.Field(_type => Instituts_medicauxWhereInput, {
    nullable: true
  })
  isNot?: Instituts_medicauxWhereInput | undefined;
}
