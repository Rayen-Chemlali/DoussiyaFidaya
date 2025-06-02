import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { instituts_medicaux_type_enum } from "../../enums/instituts_medicaux_type_enum";

@TypeGraphQL.InputType("Instituts_medicauxCreateManyInput", {})
export class Instituts_medicauxCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => instituts_medicaux_type_enum, {
    nullable: false
  })
  type!: "CLINIC" | "HOSPITAL" | "LABORATORY";
}
