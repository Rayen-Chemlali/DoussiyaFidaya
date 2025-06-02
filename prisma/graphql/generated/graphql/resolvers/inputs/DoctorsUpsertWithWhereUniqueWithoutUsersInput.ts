import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateWithoutUsersInput } from "../inputs/DoctorsCreateWithoutUsersInput";
import { DoctorsUpdateWithoutUsersInput } from "../inputs/DoctorsUpdateWithoutUsersInput";
import { DoctorsWhereUniqueInput } from "../inputs/DoctorsWhereUniqueInput";

@TypeGraphQL.InputType("DoctorsUpsertWithWhereUniqueWithoutUsersInput", {})
export class DoctorsUpsertWithWhereUniqueWithoutUsersInput {
  @TypeGraphQL.Field(_type => DoctorsWhereUniqueInput, {
    nullable: false
  })
  where!: DoctorsWhereUniqueInput;

  @TypeGraphQL.Field(_type => DoctorsUpdateWithoutUsersInput, {
    nullable: false
  })
  update!: DoctorsUpdateWithoutUsersInput;

  @TypeGraphQL.Field(_type => DoctorsCreateWithoutUsersInput, {
    nullable: false
  })
  create!: DoctorsCreateWithoutUsersInput;
}
