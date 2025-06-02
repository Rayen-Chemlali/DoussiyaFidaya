import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateOrConnectWithoutValidation_tokenInput } from "../inputs/UsersCreateOrConnectWithoutValidation_tokenInput";
import { UsersCreateWithoutValidation_tokenInput } from "../inputs/UsersCreateWithoutValidation_tokenInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";

@TypeGraphQL.InputType("UsersCreateNestedOneWithoutValidation_tokenInput", {})
export class UsersCreateNestedOneWithoutValidation_tokenInput {
  @TypeGraphQL.Field(_type => UsersCreateWithoutValidation_tokenInput, {
    nullable: true
  })
  create?: UsersCreateWithoutValidation_tokenInput | undefined;

  @TypeGraphQL.Field(_type => UsersCreateOrConnectWithoutValidation_tokenInput, {
    nullable: true
  })
  connectOrCreate?: UsersCreateOrConnectWithoutValidation_tokenInput | undefined;

  @TypeGraphQL.Field(_type => UsersWhereUniqueInput, {
    nullable: true
  })
  connect?: UsersWhereUniqueInput | undefined;
}
