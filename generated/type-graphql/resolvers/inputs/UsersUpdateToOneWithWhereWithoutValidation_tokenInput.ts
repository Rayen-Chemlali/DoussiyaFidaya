import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersUpdateWithoutValidation_tokenInput } from "../inputs/UsersUpdateWithoutValidation_tokenInput";
import { UsersWhereInput } from "../inputs/UsersWhereInput";

@TypeGraphQL.InputType("UsersUpdateToOneWithWhereWithoutValidation_tokenInput", {})
export class UsersUpdateToOneWithWhereWithoutValidation_tokenInput {
  @TypeGraphQL.Field(_type => UsersWhereInput, {
    nullable: true
  })
  where?: UsersWhereInput | undefined;

  @TypeGraphQL.Field(_type => UsersUpdateWithoutValidation_tokenInput, {
    nullable: false
  })
  data!: UsersUpdateWithoutValidation_tokenInput;
}
