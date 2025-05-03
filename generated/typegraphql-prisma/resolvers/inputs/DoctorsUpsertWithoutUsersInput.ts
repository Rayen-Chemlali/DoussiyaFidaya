import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateWithoutUsersInput } from "../inputs/DoctorsCreateWithoutUsersInput";
import { DoctorsUpdateWithoutUsersInput } from "../inputs/DoctorsUpdateWithoutUsersInput";
import { DoctorsWhereInput } from "../inputs/DoctorsWhereInput";

@TypeGraphQL.InputType("DoctorsUpsertWithoutUsersInput", {})
export class DoctorsUpsertWithoutUsersInput {
  @TypeGraphQL.Field(_type => DoctorsUpdateWithoutUsersInput, {
    nullable: false
  })
  update!: DoctorsUpdateWithoutUsersInput;

  @TypeGraphQL.Field(_type => DoctorsCreateWithoutUsersInput, {
    nullable: false
  })
  create!: DoctorsCreateWithoutUsersInput;

  @TypeGraphQL.Field(_type => DoctorsWhereInput, {
    nullable: true
  })
  where?: DoctorsWhereInput | undefined;
}
