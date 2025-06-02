import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsCreateNestedOneWithoutAuthorizationsInput } from "../inputs/PatientsCreateNestedOneWithoutAuthorizationsInput";
import { authorizations_level_enum } from "../../enums/authorizations_level_enum";

@TypeGraphQL.InputType("AuthorizationsCreateWithoutInstituts_medicauxInput", {})
export class AuthorizationsCreateWithoutInstituts_medicauxInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => authorizations_level_enum, {
    nullable: false
  })
  level!: "READ" | "WRITE" | "ADMIN";

  @TypeGraphQL.Field(_type => PatientsCreateNestedOneWithoutAuthorizationsInput, {
    nullable: false
  })
  patients!: PatientsCreateNestedOneWithoutAuthorizationsInput;
}
