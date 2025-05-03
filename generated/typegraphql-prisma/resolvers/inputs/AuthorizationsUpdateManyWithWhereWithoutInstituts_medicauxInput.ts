import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorizationsScalarWhereInput } from "../inputs/AuthorizationsScalarWhereInput";
import { AuthorizationsUpdateManyMutationInput } from "../inputs/AuthorizationsUpdateManyMutationInput";

@TypeGraphQL.InputType("AuthorizationsUpdateManyWithWhereWithoutInstituts_medicauxInput", {})
export class AuthorizationsUpdateManyWithWhereWithoutInstituts_medicauxInput {
  @TypeGraphQL.Field(_type => AuthorizationsScalarWhereInput, {
    nullable: false
  })
  where!: AuthorizationsScalarWhereInput;

  @TypeGraphQL.Field(_type => AuthorizationsUpdateManyMutationInput, {
    nullable: false
  })
  data!: AuthorizationsUpdateManyMutationInput;
}
