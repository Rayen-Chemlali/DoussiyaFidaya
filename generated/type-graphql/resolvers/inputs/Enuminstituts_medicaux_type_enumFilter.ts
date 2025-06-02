import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnuminstituts_medicaux_type_enumFilter } from "../inputs/NestedEnuminstituts_medicaux_type_enumFilter";
import { instituts_medicaux_type_enum } from "../../enums/instituts_medicaux_type_enum";

@TypeGraphQL.InputType("Enuminstituts_medicaux_type_enumFilter", {})
export class Enuminstituts_medicaux_type_enumFilter {
  @TypeGraphQL.Field(_type => instituts_medicaux_type_enum, {
    nullable: true
  })
  equals?: "doctor" | "clinique" | "hopital" | undefined;

  @TypeGraphQL.Field(_type => [instituts_medicaux_type_enum], {
    nullable: true
  })
  in?: Array<"doctor" | "clinique" | "hopital"> | undefined;

  @TypeGraphQL.Field(_type => [instituts_medicaux_type_enum], {
    nullable: true
  })
  notIn?: Array<"doctor" | "clinique" | "hopital"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnuminstituts_medicaux_type_enumFilter, {
    nullable: true
  })
  not?: NestedEnuminstituts_medicaux_type_enumFilter | undefined;
}
