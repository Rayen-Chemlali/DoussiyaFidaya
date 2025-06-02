import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorizationsUpdateWithoutInstituts_medicauxInput } from "../inputs/AuthorizationsUpdateWithoutInstituts_medicauxInput";
import { AuthorizationsWhereUniqueInput } from "../inputs/AuthorizationsWhereUniqueInput";

@TypeGraphQL.InputType("AuthorizationsUpdateWithWhereUniqueWithoutInstituts_medicauxInput", {})
export class AuthorizationsUpdateWithWhereUniqueWithoutInstituts_medicauxInput {
  @TypeGraphQL.Field(_type => AuthorizationsWhereUniqueInput, {
    nullable: false
  })
  where!: AuthorizationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => AuthorizationsUpdateWithoutInstituts_medicauxInput, {
    nullable: false
  })
  data!: AuthorizationsUpdateWithoutInstituts_medicauxInput;
}
