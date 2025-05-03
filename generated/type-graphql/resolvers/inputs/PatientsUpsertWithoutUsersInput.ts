import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsCreateWithoutUsersInput } from "../inputs/PatientsCreateWithoutUsersInput";
import { PatientsUpdateWithoutUsersInput } from "../inputs/PatientsUpdateWithoutUsersInput";
import { PatientsWhereInput } from "../inputs/PatientsWhereInput";

@TypeGraphQL.InputType("PatientsUpsertWithoutUsersInput", {})
export class PatientsUpsertWithoutUsersInput {
  @TypeGraphQL.Field(_type => PatientsUpdateWithoutUsersInput, {
    nullable: false
  })
  update!: PatientsUpdateWithoutUsersInput;

  @TypeGraphQL.Field(_type => PatientsCreateWithoutUsersInput, {
    nullable: false
  })
  create!: PatientsCreateWithoutUsersInput;

  @TypeGraphQL.Field(_type => PatientsWhereInput, {
    nullable: true
  })
  where?: PatientsWhereInput | undefined;
}
