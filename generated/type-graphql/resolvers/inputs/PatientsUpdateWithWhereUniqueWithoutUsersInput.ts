import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsUpdateWithoutUsersInput } from "../inputs/PatientsUpdateWithoutUsersInput";
import { PatientsWhereUniqueInput } from "../inputs/PatientsWhereUniqueInput";

@TypeGraphQL.InputType("PatientsUpdateWithWhereUniqueWithoutUsersInput", {})
export class PatientsUpdateWithWhereUniqueWithoutUsersInput {
  @TypeGraphQL.Field(_type => PatientsWhereUniqueInput, {
    nullable: false
  })
  where!: PatientsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PatientsUpdateWithoutUsersInput, {
    nullable: false
  })
  data!: PatientsUpdateWithoutUsersInput;
}
