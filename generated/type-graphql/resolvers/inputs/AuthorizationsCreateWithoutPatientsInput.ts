import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Instituts_medicauxCreateNestedOneWithoutAuthorizationsInput } from "../inputs/Instituts_medicauxCreateNestedOneWithoutAuthorizationsInput";
import { authorizations_level_enum } from "../../enums/authorizations_level_enum";

@TypeGraphQL.InputType("AuthorizationsCreateWithoutPatientsInput", {})
export class AuthorizationsCreateWithoutPatientsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => authorizations_level_enum, {
    nullable: false
  })
  level!: "READ" | "WRITE" | "ADMIN";

  @TypeGraphQL.Field(_type => Instituts_medicauxCreateNestedOneWithoutAuthorizationsInput, {
    nullable: true
  })
  instituts_medicaux?: Instituts_medicauxCreateNestedOneWithoutAuthorizationsInput | undefined;
}
