import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { prescriptions_status_enum } from "../../enums/prescriptions_status_enum";

@TypeGraphQL.InputType("NestedEnumprescriptions_status_enumFilter", {})
export class NestedEnumprescriptions_status_enumFilter {
  @TypeGraphQL.Field(_type => prescriptions_status_enum, {
    nullable: true
  })
  equals?: "ACTIVE" | "COMPLETED" | "CANCELLED" | undefined;

  @TypeGraphQL.Field(_type => [prescriptions_status_enum], {
    nullable: true
  })
  in?: Array<"ACTIVE" | "COMPLETED" | "CANCELLED"> | undefined;

  @TypeGraphQL.Field(_type => [prescriptions_status_enum], {
    nullable: true
  })
  notIn?: Array<"ACTIVE" | "COMPLETED" | "CANCELLED"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumprescriptions_status_enumFilter, {
    nullable: true
  })
  not?: NestedEnumprescriptions_status_enumFilter | undefined;
}
