import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { instituts_medicaux_type_enum } from "../../enums/instituts_medicaux_type_enum";

@TypeGraphQL.InputType("NestedEnuminstituts_medicaux_type_enumFilter", {})
export class NestedEnuminstituts_medicaux_type_enumFilter {
  @TypeGraphQL.Field(_type => instituts_medicaux_type_enum, {
    nullable: true
  })
  equals?: "CLINIC" | "HOSPITAL" | "LABORATORY" | undefined;

  @TypeGraphQL.Field(_type => [instituts_medicaux_type_enum], {
    nullable: true
  })
  in?: Array<"CLINIC" | "HOSPITAL" | "LABORATORY"> | undefined;

  @TypeGraphQL.Field(_type => [instituts_medicaux_type_enum], {
    nullable: true
  })
  notIn?: Array<"CLINIC" | "HOSPITAL" | "LABORATORY"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnuminstituts_medicaux_type_enumFilter, {
    nullable: true
  })
  not?: NestedEnuminstituts_medicaux_type_enumFilter | undefined;
}
