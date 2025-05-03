import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { doctors_type_enum } from "../../enums/doctors_type_enum";

@TypeGraphQL.InputType("NestedEnumdoctors_type_enumFilter", {})
export class NestedEnumdoctors_type_enumFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumdoctors_type_enumFilter, {
    nullable: true
  })
  not?: NestedEnumdoctors_type_enumFilter | undefined;
}
