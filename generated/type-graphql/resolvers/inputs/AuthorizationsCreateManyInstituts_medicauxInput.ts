import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { authorizations_level_enum } from "../../enums/authorizations_level_enum";

@TypeGraphQL.InputType("AuthorizationsCreateManyInstituts_medicauxInput", {})
export class AuthorizationsCreateManyInstituts_medicauxInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => authorizations_level_enum, {
    nullable: false
  })
  level!: "general" | "speciality" | "full_access";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  patient_id!: string;
}
