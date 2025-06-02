import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersUpdateWithoutDoctorsInput } from "../inputs/UsersUpdateWithoutDoctorsInput";
import { UsersWhereInput } from "../inputs/UsersWhereInput";

@TypeGraphQL.InputType("UsersUpdateToOneWithWhereWithoutDoctorsInput", {})
export class UsersUpdateToOneWithWhereWithoutDoctorsInput {
  @TypeGraphQL.Field(_type => UsersWhereInput, {
    nullable: true
  })
  where?: UsersWhereInput | undefined;

  @TypeGraphQL.Field(_type => UsersUpdateWithoutDoctorsInput, {
    nullable: false
  })
  data!: UsersUpdateWithoutDoctorsInput;
}
