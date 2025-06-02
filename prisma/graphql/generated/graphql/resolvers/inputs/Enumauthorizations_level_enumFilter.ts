import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumauthorizations_level_enumFilter } from "../inputs/NestedEnumauthorizations_level_enumFilter";
import { authorizations_level_enum } from "../../enums/authorizations_level_enum";

@TypeGraphQL.InputType("Enumauthorizations_level_enumFilter", {})
export class Enumauthorizations_level_enumFilter {
  @TypeGraphQL.Field(_type => authorizations_level_enum, {
    nullable: true
  })
  equals?: "READ" | "WRITE" | "ADMIN" | undefined;

  @TypeGraphQL.Field(_type => [authorizations_level_enum], {
    nullable: true
  })
  in?: Array<"READ" | "WRITE" | "ADMIN"> | undefined;

  @TypeGraphQL.Field(_type => [authorizations_level_enum], {
    nullable: true
  })
  notIn?: Array<"READ" | "WRITE" | "ADMIN"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumauthorizations_level_enumFilter, {
    nullable: true
  })
  not?: NestedEnumauthorizations_level_enumFilter | undefined;
}
