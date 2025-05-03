import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumcliniques_type_enumFilter } from "../inputs/NestedEnumcliniques_type_enumFilter";
import { NestedEnumcliniques_type_enumWithAggregatesFilter } from "../inputs/NestedEnumcliniques_type_enumWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { cliniques_type_enum } from "../../enums/cliniques_type_enum";

@TypeGraphQL.InputType("Enumcliniques_type_enumWithAggregatesFilter", {})
export class Enumcliniques_type_enumWithAggregatesFilter {
  @TypeGraphQL.Field(_type => cliniques_type_enum, {
    nullable: true
  })
  equals?: "doctor" | "clinique" | "hopital" | undefined;

  @TypeGraphQL.Field(_type => [cliniques_type_enum], {
    nullable: true
  })
  in?: Array<"doctor" | "clinique" | "hopital"> | undefined;

  @TypeGraphQL.Field(_type => [cliniques_type_enum], {
    nullable: true
  })
  notIn?: Array<"doctor" | "clinique" | "hopital"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumcliniques_type_enumWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumcliniques_type_enumWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumcliniques_type_enumFilter, {
    nullable: true
  })
  _min?: NestedEnumcliniques_type_enumFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumcliniques_type_enumFilter, {
    nullable: true
  })
  _max?: NestedEnumcliniques_type_enumFilter | undefined;
}
