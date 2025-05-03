import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { authorizations_level_enum } from "../../enums/authorizations_level_enum";

@TypeGraphQL.InputType("Enumauthorizations_level_enumFieldUpdateOperationsInput", {})
export class Enumauthorizations_level_enumFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => authorizations_level_enum, {
    nullable: true
  })
  set?: "general" | "speciality" | "full_access" | undefined;
}
