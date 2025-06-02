import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateWithoutDoctorsInput } from "../inputs/UsersCreateWithoutDoctorsInput";
import { UsersUpdateWithoutDoctorsInput } from "../inputs/UsersUpdateWithoutDoctorsInput";
import { UsersWhereInput } from "../inputs/UsersWhereInput";

@TypeGraphQL.InputType("UsersUpsertWithoutDoctorsInput", {})
export class UsersUpsertWithoutDoctorsInput {
  @TypeGraphQL.Field(_type => UsersUpdateWithoutDoctorsInput, {
    nullable: false
  })
  update!: UsersUpdateWithoutDoctorsInput;

  @TypeGraphQL.Field(_type => UsersCreateWithoutDoctorsInput, {
    nullable: false
  })
  create!: UsersCreateWithoutDoctorsInput;

  @TypeGraphQL.Field(_type => UsersWhereInput, {
    nullable: true
  })
  where?: UsersWhereInput | undefined;
}
