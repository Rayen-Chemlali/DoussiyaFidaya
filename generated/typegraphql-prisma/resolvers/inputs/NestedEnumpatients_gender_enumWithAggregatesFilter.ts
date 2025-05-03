import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumpatients_gender_enumFilter } from "../inputs/NestedEnumpatients_gender_enumFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { patients_gender_enum } from "../../enums/patients_gender_enum";

@TypeGraphQL.InputType("NestedEnumpatients_gender_enumWithAggregatesFilter", {})
export class NestedEnumpatients_gender_enumWithAggregatesFilter {
  @TypeGraphQL.Field(_type => patients_gender_enum, {
    nullable: true
  })
  equals?: "Male" | "Female" | undefined;

  @TypeGraphQL.Field(_type => [patients_gender_enum], {
    nullable: true
  })
  in?: Array<"Male" | "Female"> | undefined;

  @TypeGraphQL.Field(_type => [patients_gender_enum], {
    nullable: true
  })
  notIn?: Array<"Male" | "Female"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumpatients_gender_enumWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumpatients_gender_enumWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumpatients_gender_enumFilter, {
    nullable: true
  })
  _min?: NestedEnumpatients_gender_enumFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumpatients_gender_enumFilter, {
    nullable: true
  })
  _max?: NestedEnumpatients_gender_enumFilter | undefined;
}
