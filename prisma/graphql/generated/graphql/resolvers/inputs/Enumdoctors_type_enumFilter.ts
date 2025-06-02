import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumdoctors_type_enumFilter } from "../inputs/NestedEnumdoctors_type_enumFilter";
import { doctors_type_enum } from "../../enums/doctors_type_enum";

@TypeGraphQL.InputType("Enumdoctors_type_enumFilter", {})
export class Enumdoctors_type_enumFilter {
  @TypeGraphQL.Field(_type => doctors_type_enum, {
    nullable: true
  })
  equals?: "GENERAL_PRACTITIONER" | "SPECIALIST" | "SURGEON" | undefined;

  @TypeGraphQL.Field(_type => [doctors_type_enum], {
    nullable: true
  })
  in?: Array<"GENERAL_PRACTITIONER" | "SPECIALIST" | "SURGEON"> | undefined;

  @TypeGraphQL.Field(_type => [doctors_type_enum], {
    nullable: true
  })
  notIn?: Array<"GENERAL_PRACTITIONER" | "SPECIALIST" | "SURGEON"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumdoctors_type_enumFilter, {
    nullable: true
  })
  not?: NestedEnumdoctors_type_enumFilter | undefined;
}
