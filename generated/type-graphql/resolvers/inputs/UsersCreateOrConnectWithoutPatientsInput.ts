import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateWithoutPatientsInput } from "../inputs/UsersCreateWithoutPatientsInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";

@TypeGraphQL.InputType("UsersCreateOrConnectWithoutPatientsInput", {})
export class UsersCreateOrConnectWithoutPatientsInput {
  @TypeGraphQL.Field(_type => UsersWhereUniqueInput, {
    nullable: false
  })
  where!: UsersWhereUniqueInput;

  @TypeGraphQL.Field(_type => UsersCreateWithoutPatientsInput, {
    nullable: false
  })
  create!: UsersCreateWithoutPatientsInput;
}
