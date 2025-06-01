import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Instituts_medicauxWhereInput } from "../inputs/Instituts_medicauxWhereInput";

@TypeGraphQL.InputType("Instituts_medicauxListRelationFilter", {})
export class Instituts_medicauxListRelationFilter {
  @TypeGraphQL.Field(_type => Instituts_medicauxWhereInput, {
    nullable: true
  })
  every?: Instituts_medicauxWhereInput | undefined;

  @TypeGraphQL.Field(_type => Instituts_medicauxWhereInput, {
    nullable: true
  })
  some?: Instituts_medicauxWhereInput | undefined;

  @TypeGraphQL.Field(_type => Instituts_medicauxWhereInput, {
    nullable: true
  })
  none?: Instituts_medicauxWhereInput | undefined;
}
