import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateOrConnectWithoutPatientsInput } from "../inputs/UsersCreateOrConnectWithoutPatientsInput";
import { UsersCreateWithoutPatientsInput } from "../inputs/UsersCreateWithoutPatientsInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";

@TypeGraphQL.InputType("UsersCreateNestedOneWithoutPatientsInput", {})
export class UsersCreateNestedOneWithoutPatientsInput {
  @TypeGraphQL.Field(_type => UsersCreateWithoutPatientsInput, {
    nullable: true
  })
  create?: UsersCreateWithoutPatientsInput | undefined;

  @TypeGraphQL.Field(_type => UsersCreateOrConnectWithoutPatientsInput, {
    nullable: true
  })
  connectOrCreate?: UsersCreateOrConnectWithoutPatientsInput | undefined;

  @TypeGraphQL.Field(_type => UsersWhereUniqueInput, {
    nullable: true
  })
  connect?: UsersWhereUniqueInput | undefined;
}
