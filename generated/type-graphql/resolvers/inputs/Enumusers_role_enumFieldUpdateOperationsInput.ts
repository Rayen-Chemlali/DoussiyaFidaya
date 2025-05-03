import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { users_role_enum } from "../../enums/users_role_enum";

@TypeGraphQL.InputType("Enumusers_role_enumFieldUpdateOperationsInput", {})
export class Enumusers_role_enumFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => users_role_enum, {
    nullable: true
  })
  set?: "Patient" | "Doctor" | "Pharmacy" | "Laboratory" | "Insurance" | "Assistant" | "Admin" | undefined;
}
