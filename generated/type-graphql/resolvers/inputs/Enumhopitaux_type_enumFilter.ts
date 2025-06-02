import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumhopitaux_type_enumFilter } from "../inputs/NestedEnumhopitaux_type_enumFilter";
import { hopitaux_type_enum } from "../../enums/hopitaux_type_enum";

@TypeGraphQL.InputType("Enumhopitaux_type_enumFilter", {})
export class Enumhopitaux_type_enumFilter {
  @TypeGraphQL.Field(_type => hopitaux_type_enum, {
    nullable: true
  })
  equals?: "PUBLIC" | "PRIVATE" | undefined;

  @TypeGraphQL.Field(_type => [hopitaux_type_enum], {
    nullable: true
  })
  in?: Array<"PUBLIC" | "PRIVATE"> | undefined;

  @TypeGraphQL.Field(_type => [hopitaux_type_enum], {
    nullable: true
  })
  notIn?: Array<"PUBLIC" | "PRIVATE"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumhopitaux_type_enumFilter, {
    nullable: true
  })
  not?: NestedEnumhopitaux_type_enumFilter | undefined;
}
