import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateWithoutValidation_tokenInput } from "../inputs/UsersCreateWithoutValidation_tokenInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";

@TypeGraphQL.InputType("UsersCreateOrConnectWithoutValidation_tokenInput", {})
export class UsersCreateOrConnectWithoutValidation_tokenInput {
  @TypeGraphQL.Field(_type => UsersWhereUniqueInput, {
    nullable: false
  })
  where!: UsersWhereUniqueInput;

  @TypeGraphQL.Field(_type => UsersCreateWithoutValidation_tokenInput, {
    nullable: false
  })
  create!: UsersCreateWithoutValidation_tokenInput;
}
