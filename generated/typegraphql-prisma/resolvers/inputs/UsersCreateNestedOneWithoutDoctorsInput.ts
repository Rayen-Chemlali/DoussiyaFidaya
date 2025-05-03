import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateOrConnectWithoutDoctorsInput } from "../inputs/UsersCreateOrConnectWithoutDoctorsInput";
import { UsersCreateWithoutDoctorsInput } from "../inputs/UsersCreateWithoutDoctorsInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";

@TypeGraphQL.InputType("UsersCreateNestedOneWithoutDoctorsInput", {})
export class UsersCreateNestedOneWithoutDoctorsInput {
  @TypeGraphQL.Field(_type => UsersCreateWithoutDoctorsInput, {
    nullable: true
  })
  create?: UsersCreateWithoutDoctorsInput | undefined;

  @TypeGraphQL.Field(_type => UsersCreateOrConnectWithoutDoctorsInput, {
    nullable: true
  })
  connectOrCreate?: UsersCreateOrConnectWithoutDoctorsInput | undefined;

  @TypeGraphQL.Field(_type => UsersWhereUniqueInput, {
    nullable: true
  })
  connect?: UsersWhereUniqueInput | undefined;
}
