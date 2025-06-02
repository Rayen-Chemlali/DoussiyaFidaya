import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateWithoutValidation_tokenInput } from "../inputs/UsersCreateWithoutValidation_tokenInput";
import { UsersUpdateWithoutValidation_tokenInput } from "../inputs/UsersUpdateWithoutValidation_tokenInput";
import { UsersWhereInput } from "../inputs/UsersWhereInput";

@TypeGraphQL.InputType("UsersUpsertWithoutValidation_tokenInput", {})
export class UsersUpsertWithoutValidation_tokenInput {
  @TypeGraphQL.Field(_type => UsersUpdateWithoutValidation_tokenInput, {
    nullable: false
  })
  update!: UsersUpdateWithoutValidation_tokenInput;

  @TypeGraphQL.Field(_type => UsersCreateWithoutValidation_tokenInput, {
    nullable: false
  })
  create!: UsersCreateWithoutValidation_tokenInput;

  @TypeGraphQL.Field(_type => UsersWhereInput, {
    nullable: true
  })
  where?: UsersWhereInput | undefined;
}
