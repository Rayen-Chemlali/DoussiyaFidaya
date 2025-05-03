import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorizationsCreateWithoutInstituts_medicauxInput } from "../inputs/AuthorizationsCreateWithoutInstituts_medicauxInput";
import { AuthorizationsWhereUniqueInput } from "../inputs/AuthorizationsWhereUniqueInput";

@TypeGraphQL.InputType("AuthorizationsCreateOrConnectWithoutInstituts_medicauxInput", {})
export class AuthorizationsCreateOrConnectWithoutInstituts_medicauxInput {
  @TypeGraphQL.Field(_type => AuthorizationsWhereUniqueInput, {
    nullable: false
  })
  where!: AuthorizationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => AuthorizationsCreateWithoutInstituts_medicauxInput, {
    nullable: false
  })
  create!: AuthorizationsCreateWithoutInstituts_medicauxInput;
}
