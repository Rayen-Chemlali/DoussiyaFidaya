import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { patients_gender_enum } from "../../enums/patients_gender_enum";

@TypeGraphQL.InputType("NestedEnumpatients_gender_enumFilter", {})
export class NestedEnumpatients_gender_enumFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumpatients_gender_enumFilter, {
    nullable: true
  })
  not?: NestedEnumpatients_gender_enumFilter | undefined;
}
