import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { prescriptions_status_enum } from "../../enums/prescriptions_status_enum";

@TypeGraphQL.InputType("Enumprescriptions_status_enumFieldUpdateOperationsInput", {})
export class Enumprescriptions_status_enumFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => prescriptions_status_enum, {
    nullable: true
  })
  set?: "ACTIVE" | "COMPLETED" | "CANCELLED" | undefined;
}
