import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedUuidFilter } from "../inputs/NestedUuidFilter";
import { QueryMode } from "../../enums/QueryMode";

@TypeGraphQL.InputType("UuidFilter", {})
export class UuidFilter {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  equals?: string | undefined;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  in?: string[] | undefined;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  notIn?: string[] | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lt?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lte?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  gt?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  gte?: string | undefined;

  @TypeGraphQL.Field(_type => QueryMode, {
    nullable: true
  })
  mode?: "default" | "insensitive" | undefined;

  @TypeGraphQL.Field(_type => NestedUuidFilter, {
    nullable: true
  })
  not?: NestedUuidFilter | undefined;
}
