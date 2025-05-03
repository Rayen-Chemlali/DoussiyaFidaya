import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateWithoutPatientsInput } from "../inputs/UsersCreateWithoutPatientsInput";
import { UsersUpdateWithoutPatientsInput } from "../inputs/UsersUpdateWithoutPatientsInput";
import { UsersWhereInput } from "../inputs/UsersWhereInput";

@TypeGraphQL.InputType("UsersUpsertWithoutPatientsInput", {})
export class UsersUpsertWithoutPatientsInput {
  @TypeGraphQL.Field(_type => UsersUpdateWithoutPatientsInput, {
    nullable: false
  })
  update!: UsersUpdateWithoutPatientsInput;

  @TypeGraphQL.Field(_type => UsersCreateWithoutPatientsInput, {
    nullable: false
  })
  create!: UsersCreateWithoutPatientsInput;

  @TypeGraphQL.Field(_type => UsersWhereInput, {
    nullable: true
  })
  where?: UsersWhereInput | undefined;
}
