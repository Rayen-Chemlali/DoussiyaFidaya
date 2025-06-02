import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumcliniques_type_enumFilter } from "../inputs/NestedEnumcliniques_type_enumFilter";
import { cliniques_type_enum } from "../../enums/cliniques_type_enum";

@TypeGraphQL.InputType("Enumcliniques_type_enumFilter", {})
export class Enumcliniques_type_enumFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumcliniques_type_enumFilter, {
    nullable: true
  })
  not?: NestedEnumcliniques_type_enumFilter | undefined;
}
