import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumprescriptions_status_enumFilter } from "../inputs/NestedEnumprescriptions_status_enumFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { prescriptions_status_enum } from "../../enums/prescriptions_status_enum";

@TypeGraphQL.InputType("NestedEnumprescriptions_status_enumWithAggregatesFilter", {})
export class NestedEnumprescriptions_status_enumWithAggregatesFilter {
  @TypeGraphQL.Field(_type => prescriptions_status_enum, {
    nullable: true
  })
  equals?: "Pending" | "Approved" | "Rejected" | undefined;

  @TypeGraphQL.Field(_type => [prescriptions_status_enum], {
    nullable: true
  })
  in?: Array<"Pending" | "Approved" | "Rejected"> | undefined;

  @TypeGraphQL.Field(_type => [prescriptions_status_enum], {
    nullable: true
  })
  notIn?: Array<"Pending" | "Approved" | "Rejected"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumprescriptions_status_enumWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumprescriptions_status_enumWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumprescriptions_status_enumFilter, {
    nullable: true
  })
  _min?: NestedEnumprescriptions_status_enumFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumprescriptions_status_enumFilter, {
    nullable: true
  })
  _max?: NestedEnumprescriptions_status_enumFilter | undefined;
}
