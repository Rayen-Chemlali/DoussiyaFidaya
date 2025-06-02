import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsCreateWithoutUsersInput } from "../inputs/PatientsCreateWithoutUsersInput";
import { PatientsUpdateWithoutUsersInput } from "../inputs/PatientsUpdateWithoutUsersInput";
import { PatientsWhereUniqueInput } from "../inputs/PatientsWhereUniqueInput";

@TypeGraphQL.InputType("PatientsUpsertWithWhereUniqueWithoutUsersInput", {})
export class PatientsUpsertWithWhereUniqueWithoutUsersInput {
  @TypeGraphQL.Field(_type => PatientsWhereUniqueInput, {
    nullable: false
  })
  where!: PatientsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PatientsUpdateWithoutUsersInput, {
    nullable: false
  })
  update!: PatientsUpdateWithoutUsersInput;

  @TypeGraphQL.Field(_type => PatientsCreateWithoutUsersInput, {
    nullable: false
  })
  create!: PatientsCreateWithoutUsersInput;
}
