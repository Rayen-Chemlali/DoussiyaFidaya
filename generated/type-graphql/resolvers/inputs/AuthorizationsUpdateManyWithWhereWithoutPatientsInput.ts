import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorizationsScalarWhereInput } from "../inputs/AuthorizationsScalarWhereInput";
import { AuthorizationsUpdateManyMutationInput } from "../inputs/AuthorizationsUpdateManyMutationInput";

@TypeGraphQL.InputType("AuthorizationsUpdateManyWithWhereWithoutPatientsInput", {})
export class AuthorizationsUpdateManyWithWhereWithoutPatientsInput {
  @TypeGraphQL.Field(_type => AuthorizationsScalarWhereInput, {
    nullable: false
  })
  where!: AuthorizationsScalarWhereInput;

  @TypeGraphQL.Field(_type => AuthorizationsUpdateManyMutationInput, {
    nullable: false
  })
  data!: AuthorizationsUpdateManyMutationInput;
}
