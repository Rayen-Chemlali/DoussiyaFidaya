import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumlab_documents_status_enumFilter } from "../inputs/NestedEnumlab_documents_status_enumFilter";
import { NestedEnumlab_documents_status_enumWithAggregatesFilter } from "../inputs/NestedEnumlab_documents_status_enumWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { lab_documents_status_enum } from "../../enums/lab_documents_status_enum";

@TypeGraphQL.InputType("Enumlab_documents_status_enumWithAggregatesFilter", {})
export class Enumlab_documents_status_enumWithAggregatesFilter {
  @TypeGraphQL.Field(_type => lab_documents_status_enum, {
    nullable: true
  })
  equals?: "pending" | "in_progress" | "completed" | "cancelled" | undefined;

  @TypeGraphQL.Field(_type => [lab_documents_status_enum], {
    nullable: true
  })
  in?: Array<"pending" | "in_progress" | "completed" | "cancelled"> | undefined;

  @TypeGraphQL.Field(_type => [lab_documents_status_enum], {
    nullable: true
  })
  notIn?: Array<"pending" | "in_progress" | "completed" | "cancelled"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumlab_documents_status_enumWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumlab_documents_status_enumWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumlab_documents_status_enumFilter, {
    nullable: true
  })
  _min?: NestedEnumlab_documents_status_enumFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumlab_documents_status_enumFilter, {
    nullable: true
  })
  _max?: NestedEnumlab_documents_status_enumFilter | undefined;
}
