import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsUpdateWithoutUsersInput } from "../inputs/DoctorsUpdateWithoutUsersInput";
import { DoctorsWhereUniqueInput } from "../inputs/DoctorsWhereUniqueInput";

@TypeGraphQL.InputType("DoctorsUpdateWithWhereUniqueWithoutUsersInput", {})
export class DoctorsUpdateWithWhereUniqueWithoutUsersInput {
  @TypeGraphQL.Field(_type => DoctorsWhereUniqueInput, {
    nullable: false
  })
  where!: DoctorsWhereUniqueInput;

  @TypeGraphQL.Field(_type => DoctorsUpdateWithoutUsersInput, {
    nullable: false
  })
  data!: DoctorsUpdateWithoutUsersInput;
}
