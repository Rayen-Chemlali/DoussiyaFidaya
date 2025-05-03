import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumdoctors_type_enumFilter } from "../inputs/NestedEnumdoctors_type_enumFilter";
import { NestedEnumdoctors_type_enumWithAggregatesFilter } from "../inputs/NestedEnumdoctors_type_enumWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { doctors_type_enum } from "../../enums/doctors_type_enum";

@TypeGraphQL.InputType("Enumdoctors_type_enumWithAggregatesFilter", {})
export class Enumdoctors_type_enumWithAggregatesFilter {
  @TypeGraphQL.Field(_type => doctors_type_enum, {
    nullable: true
  })
  equals?: "doctor" | "clinique" | "hopital" | undefined;

  @TypeGraphQL.Field(_type => [doctors_type_enum], {
    nullable: true
  })
  in?: Array<"doctor" | "clinique" | "hopital"> | undefined;

  @TypeGraphQL.Field(_type => [doctors_type_enum], {
    nullable: true
  })
  notIn?: Array<"doctor" | "clinique" | "hopital"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumdoctors_type_enumWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumdoctors_type_enumWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumdoctors_type_enumFilter, {
    nullable: true
  })
  _min?: NestedEnumdoctors_type_enumFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumdoctors_type_enumFilter, {
    nullable: true
  })
  _max?: NestedEnumdoctors_type_enumFilter | undefined;
}
