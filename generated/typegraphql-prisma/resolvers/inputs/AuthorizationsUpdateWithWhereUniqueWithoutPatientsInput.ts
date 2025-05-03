import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorizationsUpdateWithoutPatientsInput } from "../inputs/AuthorizationsUpdateWithoutPatientsInput";
import { AuthorizationsWhereUniqueInput } from "../inputs/AuthorizationsWhereUniqueInput";

@TypeGraphQL.InputType("AuthorizationsUpdateWithWhereUniqueWithoutPatientsInput", {})
export class AuthorizationsUpdateWithWhereUniqueWithoutPatientsInput {
  @TypeGraphQL.Field(_type => AuthorizationsWhereUniqueInput, {
    nullable: false
  })
  where!: AuthorizationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => AuthorizationsUpdateWithoutPatientsInput, {
    nullable: false
  })
  data!: AuthorizationsUpdateWithoutPatientsInput;
}
