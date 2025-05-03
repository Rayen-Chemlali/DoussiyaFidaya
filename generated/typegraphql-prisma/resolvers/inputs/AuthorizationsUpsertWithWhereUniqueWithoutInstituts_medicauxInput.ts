import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorizationsCreateWithoutInstituts_medicauxInput } from "../inputs/AuthorizationsCreateWithoutInstituts_medicauxInput";
import { AuthorizationsUpdateWithoutInstituts_medicauxInput } from "../inputs/AuthorizationsUpdateWithoutInstituts_medicauxInput";
import { AuthorizationsWhereUniqueInput } from "../inputs/AuthorizationsWhereUniqueInput";

@TypeGraphQL.InputType("AuthorizationsUpsertWithWhereUniqueWithoutInstituts_medicauxInput", {})
export class AuthorizationsUpsertWithWhereUniqueWithoutInstituts_medicauxInput {
  @TypeGraphQL.Field(_type => AuthorizationsWhereUniqueInput, {
    nullable: false
  })
  where!: AuthorizationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => AuthorizationsUpdateWithoutInstituts_medicauxInput, {
    nullable: false
  })
  update!: AuthorizationsUpdateWithoutInstituts_medicauxInput;

  @TypeGraphQL.Field(_type => AuthorizationsCreateWithoutInstituts_medicauxInput, {
    nullable: false
  })
  create!: AuthorizationsCreateWithoutInstituts_medicauxInput;
}
