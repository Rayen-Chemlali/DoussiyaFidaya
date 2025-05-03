import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersUpdateWithoutPatientsInput } from "../inputs/UsersUpdateWithoutPatientsInput";
import { UsersWhereInput } from "../inputs/UsersWhereInput";

@TypeGraphQL.InputType("UsersUpdateToOneWithWhereWithoutPatientsInput", {})
export class UsersUpdateToOneWithWhereWithoutPatientsInput {
  @TypeGraphQL.Field(_type => UsersWhereInput, {
    nullable: true
  })
  where?: UsersWhereInput | undefined;

  @TypeGraphQL.Field(_type => UsersUpdateWithoutPatientsInput, {
    nullable: false
  })
  data!: UsersUpdateWithoutPatientsInput;
}
