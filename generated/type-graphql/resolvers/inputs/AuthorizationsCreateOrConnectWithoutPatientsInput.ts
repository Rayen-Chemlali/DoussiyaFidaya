import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorizationsCreateWithoutPatientsInput } from "../inputs/AuthorizationsCreateWithoutPatientsInput";
import { AuthorizationsWhereUniqueInput } from "../inputs/AuthorizationsWhereUniqueInput";

@TypeGraphQL.InputType("AuthorizationsCreateOrConnectWithoutPatientsInput", {})
export class AuthorizationsCreateOrConnectWithoutPatientsInput {
  @TypeGraphQL.Field(_type => AuthorizationsWhereUniqueInput, {
    nullable: false
  })
  where!: AuthorizationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => AuthorizationsCreateWithoutPatientsInput, {
    nullable: false
  })
  create!: AuthorizationsCreateWithoutPatientsInput;
}
